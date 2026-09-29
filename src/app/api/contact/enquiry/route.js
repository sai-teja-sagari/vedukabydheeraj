import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'eventDate', 'location', 'message'];
const WHATSAPP_API_VERSION = process.env.WHATSAPP_API_VERSION || 'v19.0';

function buildEnquiryHtml({ name, email, phone, eventDate, location, occasionType, message }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #241C12;">New Enquiry — ${occasionType || 'General'}</h2>
      <table style="width: 100%; border-bottom: 1px solid #E9DCBB; margin-bottom: 16px;">
        <tr><td style="padding: 4px 0;"><strong>Name:</strong> ${name}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Email:</strong> ${email}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Phone:</strong> ${phone}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Event date:</strong> ${eventDate}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Location / city:</strong> ${location}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Occasion:</strong> ${occasionType}</td></tr>
      </table>
      <p style="font-size: 14px; color: #241C12; white-space: pre-wrap;">${message}</p>
    </div>
  `;
}

function buildWhatsAppMessage({ name, email, phone, eventDate, location, occasionType, message }) {
  const lines = [
    '*New enquiry from website*',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Event date: ${eventDate}`,
    `Location: ${location}`,
    `Occasion: ${occasionType || 'General'}`,
    '',
    'Message:',
    message,
  ];

  return lines.join('\n');
}

function normalizeWhatsAppNumber(value) {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  return digits.startsWith('00') ? `+${digits.slice(2)}` : `+${digits}`;
}

async function sendWhatsAppNotification(payload) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminNumber = process.env.WHATSAPP_ADMIN_NUMBER;

  if (!token || !phoneNumberId || !adminNumber) {
    console.warn('WhatsApp notification skipped: missing WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, or WHATSAPP_ADMIN_NUMBER');
    return { ok: false, reason: 'missing-config' };
  }

  try {
    const apiUrl = `https://graph.facebook.com/${WHATSAPP_API_VERSION}/${phoneNumberId}/messages`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: normalizeWhatsAppNumber(adminNumber),
        type: 'text',
        text: {
          body: buildWhatsAppMessage(payload),
        },
      }),
    });

    const responseBody = await response.text();

    if (!response.ok) {
      console.error('WhatsApp API error:', response.status, responseBody);
      return { ok: false, reason: responseBody };
    }

    console.log('WhatsApp message sent successfully:', responseBody);
    return { ok: true };
  } catch (err) {
    console.error('WhatsApp request failed:', err);
    return { ok: false, reason: err instanceof Error ? err.message : 'unknown-error' };
  }
}

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, eventDate, location, occasionType, message } = body ?? {};

  const missing = REQUIRED_FIELDS.filter((field) => !body?.[field]);
  if (missing.length > 0) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      // TODO: swap for a verified sending domain address once one exists
      // in your Resend account — onboarding@resend.dev only works for testing.
      from: 'Veduka Enquiries <onboarding@resend.dev>',
      to: process.env.ADMIN_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New Enquiry — ${name} (${occasionType || 'General'})`,
      html: buildEnquiryHtml({ name, email, phone, eventDate, location, occasionType, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send notification' }, { status: 500 });
    }

    console.log('Resend accepted:', data?.id);

    const whatsappResult = await sendWhatsAppNotification({
      name,
      email,
      phone,
      eventDate,
      location,
      occasionType,
      message,
    });

    if (!whatsappResult.ok) {
      console.warn('Email sent successfully, but WhatsApp delivery failed:', whatsappResult.reason);
    }

    return Response.json({ success: true, whatsappSent: whatsappResult.ok });
  } catch (err) {
    console.error('Resend request failed:', err);
    return Response.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
