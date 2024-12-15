import nodemailer from 'nodemailer';
import { getEmailConfig } from '../config/email.js';

export async function sendEmail(emailData) {
  const config = getEmailConfig();
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: emailData.service 
      ? `Nouvelle demande - ${emailData.service}`
      : 'Nouveau message de contact',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C4A484;">Nouveau message reçu</h2>
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 5px;">
          <p><strong>Nom:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          ${emailData.service ? `<p><strong>Service:</strong> ${emailData.service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${emailData.message}</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}