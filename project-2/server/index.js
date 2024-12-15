import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { emailRouter } from './routes/email.js';
import { verifyEmailConfig } from './config/email.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

// Vérification de la configuration email au démarrage
verifyEmailConfig().then(isValid => {
  if (!isValid) {
    console.warn('Attention: Le service email n\'est pas correctement configuré');
  }
});

// Routes API
app.use('/api', emailRouter);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur serveur:', err);
  res.status(500).json({
    success: false,
    message: 'Une erreur est survenue sur le serveur'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`API disponible sur http://localhost:${PORT}/api`);
});