import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API Endpoint for Contact Form
app.post('/api/contact', async (req: express.Request, res: express.Response): Promise<void> => {
  const { name, email, message, subject } = req.body;

  // Validate request fields
  if (!name || !email || !message) {
    res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    return;
  }

  // Ensure environment variables are loaded
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
    res.status(500).json({ error: 'Server email configuration is missing.' });
    return;
  }

  try {
    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Authenticated sender
      replyTo: email, // Direct reply to the user who filled the form
      to: process.env.EMAIL_USER, // Recipient is the portfolio owner
      subject: subject || `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #a855f7; border-bottom: 2px solid #a855f7; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #a855f7; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            This email was sent automatically from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    console.log(`Email successfully sent from ${email}`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Serve static assets in production mode
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// For all other routes, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`[Server] Express server running on port ${PORT}`);
});
