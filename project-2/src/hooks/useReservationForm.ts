import { useState } from 'react';
import { sendReservation } from '../services/api/reservationService';
import type { ReservationFormData } from '../types/reservation';

export function useReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (service: string, date: string) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await sendReservation({
        ...formData,
        service,
        date,
      });

      if (response.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        return { success: true, message: 'Réservation envoyée avec succès' };
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi de la réservation');
      return { success: false, message: 'Erreur lors de l\'envoi de la réservation' };
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return {
    formData,
    isSubmitting,
    error,
    handleSubmit,
    handleChange,
  };
}