import { API_CONFIG } from './config';
import type { ReservationData } from '../../types/reservation';

export async function sendReservation(data: ReservationData) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEND_RESERVATION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de l\'envoi de la réservation');
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la réservation:', error);
    throw error;
  }
}