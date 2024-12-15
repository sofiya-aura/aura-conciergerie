export const EMAIL_CONFIG = {
  host: 'smtp.ionos.fr',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@aura-conciergerie.com',
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
};