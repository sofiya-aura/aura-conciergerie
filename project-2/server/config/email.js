import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = [
  'EMAIL_HOST',
  'EMAIL_PORT',
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'EMAIL_FROM',
  'EMAIL_TO'
];

export function getEmailConfig() {
  // Vérifier les variables d'environnement requises
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      throw new Error(`La variable d'environnement ${varName} est manquante`);
    }
  }

  return {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  };
}

export async function verifyEmailConfig() {
  try {
    const config = getEmailConfig();
    const transporter = nodemailer.createTransport(config);
    await transporter.verify();
    console.log('Configuration email vérifiée avec succès');
    return true;
  } catch (error) {
    console.error('Erreur de configuration email:', error);
    return false;
  }
}