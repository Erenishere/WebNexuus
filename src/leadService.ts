import { LeadFormInput } from './types';

export const contactEmail = 'webnexuus@gmail.com';

export async function submitLead(payload: LeadFormInput) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new Error(data?.message || 'We could not submit your request right now. Please try again.');
  }

  return response.json() as Promise<{ message: string }>;
}
