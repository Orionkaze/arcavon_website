import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// The email address that will receive contact form submissions
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@arcavon.com';

// GET handler for testing
export async function GET() {
    return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Arcavon Contact Form <onboarding@resend.dev>',
            to: [CONTACT_EMAIL],
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00c2ff;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #333;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
            ${message}
          </div>
          <hr style="border: 1px solid #333; margin-top: 20px;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Arcavon website contact form.
          </p>
        </div>
      `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: error.message || 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
