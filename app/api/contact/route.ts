// pages/api/contact.ts or app/api/contact/route.ts (depending on your Next.js version)

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject: string;
  message: string;
  interest?: string;
  timestamp: string;
}

// Email configuration - Update these with your actual email service credentials
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // or your email provider
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@bicarapintar.ai',
    pass: process.env.SMTP_PASS || 'your-app-password' // Use app password for Gmail
  }
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    
    // Validate required fields
    const { name, email, company, subject, message } = body;
    
    if (!name || !email || !company || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #6A2FF7 0%, #3B82F6 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #f8fafc;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            border: 1px solid #e2e8f0;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #6A2FF7;
          }
          .label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
            display: block;
          }
          .value {
            color: #1f2937;
            word-wrap: break-word;
          }
          .footer {
            margin-top: 30px;
            padding: 20px;
            background: #374151;
            color: white;
            text-align: center;
            border-radius: 8px;
            font-size: 14px;
          }
          .timestamp {
            color: #6b7280;
            font-size: 12px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">BicaraPintar Website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Full Name:</span>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <span class="label">Email Address:</span>
            <div class="value">
              <a href="mailto:${email}" style="color: #6A2FF7; text-decoration: none;">${email}</a>
            </div>
          </div>
          
          <div class="field">
            <span class="label">Company:</span>
            <div class="value">${company}</div>
          </div>
          
          ${body.phone ? `
          <div class="field">
            <span class="label">Phone Number:</span>
            <div class="value">
              <a href="tel:${body.phone}" style="color: #6A2FF7; text-decoration: none;">${body.phone}</a>
            </div>
          </div>
          ` : ''}
          
          ${body.interest ? `
          <div class="field">
            <span class="label">Area of Interest:</span>
            <div class="value">${body.interest}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Subject:</span>
            <div class="value">${subject}</div>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="value" style="white-space: pre-wrap;">${message}</div>
          </div>
          
          <div class="timestamp">
            Submitted on: ${new Date(body.timestamp).toLocaleString('en-US', {
              timeZone: 'Asia/Jakarta',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} WIB
          </div>
        </div>
        
        <div class="footer">
          <p style="margin: 0;"><strong>BicaraPintar - Enterprise AI Solutions</strong></p>
          <p style="margin: 5px 0 0 0;">This message was sent from the contact form on bicarapintar.ai</p>
        </div>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textContent = `
New Contact Form Submission - BicaraPintar

Full Name: ${name}
Email: ${email}
Company: ${company}
${body.phone ? `Phone: ${body.phone}` : ''}
${body.interest ? `Area of Interest: ${body.interest}` : ''}
Subject: ${subject}

Message:
${message}

Submitted on: ${new Date(body.timestamp).toLocaleString('en-US', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})} WIB

---
This message was sent from the contact form on bicarapintar.ai
    `;

    // Email options
    const mailOptions = {
      from: `"BicaraPintar Contact Form" <${emailConfig.auth.user}>`,
      to: 'noreply@bicarapintar.ai',
      cc: ['support@bicarapintar.ai', 'wisnu@bicarapintar.ai', 'gaffy@bicarapintar.ai'], // Send copies to main contacts
      subject: `New Contact Form: ${subject} - from ${company}`,
      text: textContent,
      html: htmlContent,
      replyTo: email, // Allow replies to go directly to the sender
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'X-Mailer': 'BicaraPintar Contact Form'
      }
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      from: email,
      company: company,
      subject: subject,
      timestamp: body.timestamp
    });

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: `"BicaraPintar Team" <${emailConfig.auth.user}>`,
      to: email,
      subject: 'Thank you for contacting BicaraPintar - We\'ve received your message',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #6A2FF7 0%, #3B82F6 100%);
              color: white;
              padding: 30px;
              border-radius: 10px;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              margin-top: 20px;
              border-radius: 10px;
              border: 1px solid #e2e8f0;
            }
            .highlight {
              background: #eff6ff;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #3B82F6;
              margin: 20px 0;
            }
            .contact-info {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for your interest in BicaraPintar's AI solutions. We've successfully received your message regarding "<strong>${subject}</strong>" and our team will review it carefully.</p>
            
            <div class="highlight">
              <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Our AI specialists will review your inquiry within 24 hours</li>
                <li>We'll prepare a customized response based on your specific needs</li>
                <li>You'll receive a detailed follow-up from our team</li>
                <li>If urgent, we may contact you directly via phone</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our solutions on our website or reach out to us directly if you have any urgent questions.</p>
            
            <div class="contact-info">
              <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Email:</strong> support@bicarapintar.ai</p>
              <p style="margin: 5px 0;"><strong>Wisnu:</strong> (+62) 858 8579 9505</p>
              <p style="margin: 5px 0;"><strong>Gaffy AGB:</strong> (+62) 811 22 57 586</p>
              <p style="margin: 5px 0;"><strong>Website:</strong> www.bicarapintar.ai</p>
            </div>
            
            <p>Best regards,<br>
            <strong>The BicaraPintar Team</strong><br>
            <em>Enterprise AI Solutions</em></p>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${name},

Thank you for your interest in BicaraPintar's AI solutions. We've successfully received your message regarding "${subject}" and our team will review it carefully.

What happens next?
- Our AI specialists will review your inquiry within 24 hours
- We'll prepare a customized response based on your specific needs  
- You'll receive a detailed follow-up from our team
- If urgent, we may contact you directly via phone

Contact Information:
Email: support@bicarapintar.ai
Wisnu: (+62) 858 8579 9505
Gaffy AGB: (+62) 811 22 57 586
Website: www.bicarapintar.ai

Best regards,
The BicaraPintar Team
Enterprise AI Solutions
      `
    };

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for health check)
export async function GET() {
  return NextResponse.json(
    { 
      status: 'Contact API is running',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}