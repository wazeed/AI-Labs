import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Configure nodemailer transporter
    // IMPORTANT: Replace with your actual email service provider's details
    // Store sensitive credentials in environment variables (e.g., process.env.EMAIL_HOST)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.example.com', // Replace with your SMTP host
      port: Number(process.env.EMAIL_PORT) || 587, // Replace with your SMTP port
      secure: process.env.EMAIL_SECURE === 'true' || false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || 'your-email@example.com', // Replace with your email address
        pass: process.env.EMAIL_PASS || 'your-email-password', // Replace with your email password
      },
      // If using services like Gmail, you might need to enable "Less secure app access"
      // or use an App Password. For production, consider OAuth2.
    });

    // Define email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address (appears in "From" field)
      to: process.env.CONTACT_FORM_RECEIVER_EMAIL || 'contact@ailabs.com', // Change to your receiving email address
      replyTo: email, // So you can reply directly to the user's email
      subject: `New Contact Form Submission: ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; border: 1px solid #eee; padding: 10px;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #777;">This message was sent from the contact form on AI Labs website.</p>
        </div>
      `,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      let emailErrorMessage = 'Failed to send message.';
      if (emailError instanceof Error) {
        // Avoid exposing detailed internal error messages to the client if not desired
        // emailErrorMessage = emailError.message; 
      }
      return NextResponse.json({ error: emailErrorMessage, details: (emailError as Error).message }, { status: 500 });
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: 'Failed to process request', details: errorMessage }, { status: 500 });
  }
}
