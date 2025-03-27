export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('Email configuration:', {
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT) || 587,
      secure: process.env.EMAIL_SERVER_SECURE === 'True',
      user: process.env.EMAIL_SERVER_USER ? '✓' : '✗',
      pass: process.env.EMAIL_SERVER_PASSWORD ? '✓' : '✗',
      from: process.env.EMAIL_FROM || 'sales@mobiwebgs.com',
      to: process.env.EMAIL_TO || 'sales@mobiwebgs.com',
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT) || 587,
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      // Add this for debugging
      debug: true,
      logger: true
    });

    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'sales@mobiwebgs.com',
      to: process.env.EMAIL_TO || 'sales@mobiwebgs.com',
      subject: data.subject || 'New Contact Form Submission',
      replyTo: data.email,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Subject: ${data.subject || 'General Inquiry'}
        
        Message:
        ${data.message}
        
        Sent from: Website Contact Form
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0047AB; border-bottom: 2px solid #00E676; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p><strong style="color: #333;">Name:</strong> ${data.name}</p>
            <p><strong style="color: #333;">Email:</strong> <a href="mailto:${data.email}" style="color: #0047AB;">${data.email}</a></p>
            <p><strong style="color: #333;">Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong style="color: #333;">Subject:</strong> ${data.subject || 'General Inquiry'}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            <p>Sent from: Website Contact Form</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log('Sending email with options:', mailOptions);
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}