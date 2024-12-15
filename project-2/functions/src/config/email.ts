import * as functions from 'firebase-functions';

export const emailConfig = {
  host: 'smtp.ionos.fr',
  port: 587,
  secure: false,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password
  },
  tls: {
    rejectUnauthorized: false
  }
};

export const emailTemplate = (data: any) => ({
  from: `"Aura Conciergerie" <${functions.config().email.user}>`,
  to: functions.config().email.user,
  subject: `Nouveau message de contact de ${data.name}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C4A484;">Nouveau message reçu</h2>
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 5px;">
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
      </div>
    </div>
  `
});