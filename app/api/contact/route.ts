\
import { NextResponse } from \'next/server\';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: \'All fields are required.\' }, { status: 400 });
    }

    if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      return NextResponse.json({ error: \'Invalid email address.\' }, { status: 400 });
    }

    // Simulate email sending
    console.log(\'---- Contact Form Submission ----\');
    console.log(\'Name:\', name);
    console.log(\'Email:\', email);
    console.log(\'Subject:\', subject);
    console.log(\'Message:\', message);
    console.log(\'-------------------------------\');

    // In a real application, you would integrate an email sending service here.
    // For example, using Nodemailer, Resend, SendGrid, etc.
    // const emailSent = await sendEmail({ name, email, subject, message });
    // if (!emailSent) {
    //   return NextResponse.json({ error: \'Failed to send message.\' }, { status: 500 });
    // }

    return NextResponse.json({ success: true, message: \'Message received successfully!\' }, { status: 200 });

  } catch (error) {
    console.error(\'Error processing contact form:\', error);
    let errorMessage = \'An unexpected error occurred.\';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: \'Failed to process request\', details: errorMessage }, { status: 500 });
  }
}
