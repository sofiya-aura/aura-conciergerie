import express from 'express';
import { sendEmail } from '../services/emailService.js';

const router = express.Router();

router.post('/send-email', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;

    // Validation basique
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Adresse email invalide'
      });
    }

    await sendEmail({ name, email, message, service });

    res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur route email:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email'
    });
  }
});

export const emailRouter = router;