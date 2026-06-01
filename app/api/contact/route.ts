import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactEmail } from '../../../src/leadService';
import { LeadFormInput } from '../../../src/types';

const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
const recipientEmail = process.env.CONTACT_TO_EMAIL || contactEmail;

function isValidLead(payload: Partial<LeadFormInput>) {
  return Boolean(
    payload.fullName?.trim() &&
      payload.email?.trim() &&
      payload.projectDescription?.trim()
  );
}

function buildEmailBody(payload: Partial<LeadFormInput>) {
  const lines = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phoneOrWhatsApp || 'Not provided'}`,
    `Project type: ${payload.projectType || 'Not selected'}`,
    `Budget range: ${payload.budgetRange || 'Not selected'}`,
    '',
    'Project description:',
    payload.projectDescription,
  ];

  return lines.join('\n');
}

function hasSmtpConfig() {
  return Boolean(
    process.env.CONTACT_SMTP_HOST &&
      process.env.CONTACT_SMTP_PORT &&
      process.env.CONTACT_SMTP_USER &&
      process.env.CONTACT_SMTP_PASS
  );
}

async function sendWithSmtp(payload: Partial<LeadFormInput>) {
  const port = Number(process.env.CONTACT_SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.CONTACT_SMTP_USER,
      pass: process.env.CONTACT_SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || process.env.CONTACT_SMTP_USER,
    to: recipientEmail,
    replyTo: payload.email,
    subject: `New WebNexus project request from ${payload.fullName}`,
    text: buildEmailBody(payload),
  });
}

async function sendWithFormspree(payload: Partial<LeadFormInput>) {
  if (!formspreeEndpoint) {
    return false;
  }

  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.fullName,
      email: payload.email,
      phoneOrWhatsApp: payload.phoneOrWhatsApp || 'Not provided',
      projectType: payload.projectType,
      budgetRange: payload.budgetRange,
      message: payload.projectDescription,
      _subject: `New WebNexus project request from ${payload.fullName}`,
    }),
  });

  if (!response.ok) {
    throw new Error('Form backend rejected the message.');
  }

  return true;
}

export async function POST(request: Request) {
  let payload: Partial<LeadFormInput>;

  try {
    payload = (await request.json()) as Partial<LeadFormInput>;
  } catch {
    return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
  }

  if (!isValidLead(payload)) {
    return NextResponse.json(
      { message: 'Please complete your name, email and project description before sending.' },
      { status: 400 }
    );
  }

  try {
    if (hasSmtpConfig()) {
      await sendWithSmtp(payload);
      return NextResponse.json({ message: 'Your request has been sent.' });
    }

    if (await sendWithFormspree(payload)) {
      return NextResponse.json({ message: 'Your request has been sent.' });
    }

    return NextResponse.json(
      {
        message:
          'Email delivery is not configured yet. Please email webnexuus@gmail.com directly while we finish setup.',
      },
      { status: 503 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'We could not submit your request right now. Please email webnexuus@gmail.com directly.' },
      { status: 502 }
    );
  }
}
