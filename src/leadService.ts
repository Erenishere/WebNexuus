import { LeadFormInput } from './types';

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
export const contactEmail = 'webnexuus@gmail.com';

function buildMailtoHref(payload: LeadFormInput) {
  const subject = `Project enquiry from ${payload.fullName}`;
  const body = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phoneOrWhatsApp || 'Not provided'}`,
    `Project type: ${payload.projectType}`,
    `Budget range: ${payload.budgetRange}`,
    '',
    'Project description:',
    payload.projectDescription,
  ].join('\n');

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitLead(payload: LeadFormInput) {
  if (!formspreeEndpoint) {
    window.location.href = buildMailtoHref(payload);
    return 'email-client';
  }

  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('We could not submit your request right now. Please try again.');
  }

  return 'submitted';
}
