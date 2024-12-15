import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import { emailConfig, emailTemplate } from './config/email';

// Initialiser Firebase Admin
admin.initializeApp();

// Créer le transporteur Nodemailer
const transporter = nodemailer.createTransport(emailConfig);

export const onContactMessageCreated = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    try {
      // Vérifier la connexion SMTP
      await transporter.verify();
      
      // Envoyer l'email
      const info = await transporter.sendMail(emailTemplate(data));
      
      // Mettre à jour le document avec le statut d'envoi
      await snap.ref.update({
        emailSent: true,
        emailMessageId: info.messageId,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp()
      });

      functions.logger.info('Email envoyé avec succès', info.messageId);
      return { success: true };
    } catch (error) {
      functions.logger.error('Erreur lors de l\'envoi de l\'email', error);
      
      // Mettre à jour le document avec l'erreur
      await snap.ref.update({
        emailError: error.message,
        emailSent: false,
        emailErrorAt: admin.firestore.FieldValue.serverTimestamp()
      });

      throw new functions.https.HttpsError('internal', 'Erreur lors de l\'envoi de l\'email');
    }
  });