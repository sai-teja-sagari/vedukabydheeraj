import { Resend } from 'resend';
import { CEREMONIES, EVENT_TYPES, PRESETS } from '@/lib/estimator/data';
import { verifySelections } from '@/lib/estimator/pricing';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function groupByCeremony(verifiedSelections) {
  const groups = [];
  const indexByCeremony = new Map();
  verifiedSelections.forEach((item) => {
    if (!indexByCeremony.has(item.ceremony)) {
      indexByCeremony.set(item.ceremony, groups.length);
      groups.push({ ceremony: item.ceremony, items: [] });
    }
    groups[indexByCeremony.get(item.ceremony)].items.push(item);
  });
  return groups;
}

function buildQuoteHtml({ contact, eventTypeLabel, presetLabel, groups, total }) {
  const groupsHtml = groups
    .map(
      (group) => `
        <tr>
          <td style="padding: 12px 0 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #9C7620;">
            ${group.ceremony}
          </td>
        </tr>
        ${group.items
          .map(
            (item) => `
        <tr>
          <td style="padding: 2px 0; font-size: 14px; color: #241C12;">
            <span style="display: inline-block; width: 70%;">${item.service}</span>
            <span style="display: inline-block; width: 28%; text-align: right; color: #6B5A42;">${formatRupees(item.price)}</span>
          </td>
        </tr>`
          )
          .join('')}`
    )
    .join('');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #241C12;">New Quote Request</h2>
      <table style="width: 100%; border-bottom: 1px solid #E9DCBB; margin-bottom: 16px;">
        <tr><td style="padding: 4px 0;"><strong>Name:</strong> ${contact.fullName}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>WhatsApp:</strong> ${contact.whatsapp}</td></tr>
        ${contact.email ? `<tr><td style="padding: 4px 0;"><strong>Email:</strong> ${contact.email}</td></tr>` : ''}
        <tr><td style="padding: 4px 0;"><strong>Event date:</strong> ${contact.eventDate}</td></tr>
        <tr><td style="padding: 4px 0;"><strong>Venue / City:</strong> ${contact.venueCity}</td></tr>
        <tr><td style="padding: 4px 0 12px;"><strong>Event type:</strong> ${eventTypeLabel}${presetLabel ? ` (${presetLabel} preset)` : ''}</td></tr>
      </table>
      <table style="width: 100%;">
        ${groupsHtml || '<tr><td style="padding: 8px 0; color: #6B5A42;">No services selected — custom quote requested.</td></tr>'}
        <tr>
          <td style="padding: 14px 0 0; border-top: 1px solid #DCC98F; font-size: 16px; font-weight: 700; color: #241C12;">
            <span style="display: inline-block; width: 70%;">Total Estimate</span>
            <span style="display: inline-block; width: 28%; text-align: right; color: #9C7620;">${formatRupees(total)}</span>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function POST(request) {
  const body = await request.json();
  const { contact, eventType, presetUsed, selections } = body ?? {};

  if (!contact?.fullName || !contact?.whatsapp || !contact?.eventDate || !contact?.venueCity) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Never trust the client's totalAmount/itemCount — recompute from the
  // real data by looking up each submitted (ceremony, service) pair.
  const { total, verified } = verifySelections(selections, CEREMONIES);
  const groups = groupByCeremony(verified);
  const eventTypeLabel = EVENT_TYPES[eventType]?.label ?? eventType ?? 'Custom enquiry';
  const presetLabel = presetUsed ? PRESETS[presetUsed]?.label ?? presetUsed : null;

  try {
    const { data, error } = await resend.emails.send({
      // TODO: swap for a verified sending domain address once one exists
      // in your Resend account — onboarding@resend.dev only works for testing.
      from: 'Veduka Estimator <onboarding@resend.dev>',
      to: process.env.ADMIN_NOTIFICATION_EMAIL,
      subject: `New Quote Request — ${contact.fullName} (${formatRupees(total)})`,
      html: buildQuoteHtml({ contact, eventTypeLabel, presetLabel, groups, total }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send notification' }, { status: 500 });
    }

    console.log('Resend accepted:', data?.id);
    return Response.json({ success: true, total });
  } catch (err) {
    console.error('Resend request failed:', err);
    return Response.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
