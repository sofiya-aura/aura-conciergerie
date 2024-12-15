import axios, { AxiosError } from 'axios';
import type { EmailData, EmailResponse } from '../../types/email';
import { API_CONFIG } from './config';

export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  try {
    // Créer un nouvel objet avec uniquement les données nécessaires
    const emailData = {
      name: data.name,
      email: data.email,
      message: data.message,
      service: data.service || 'Contact général'
    };

    const response = await axios.post(
      `${API_CONFIG.BASE_URL}/send-email`,
      emailData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      success: true,
      message: 'Message envoyé avec succès'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      throw new Error(
        axiosError.response?.data?.message || 
        'Erreur lors de l\'envoi de l\'email'
      );
    }
    throw new Error('Erreur lors de l\'envoi de l\'email');
  }
}