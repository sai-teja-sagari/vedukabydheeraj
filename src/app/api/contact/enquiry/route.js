import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'eventDate', 'location', 'message'];

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
    return Response.json({ success: true });
  } catch (err) {
    console.error('Resend request failed:', err);
    return Response.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
