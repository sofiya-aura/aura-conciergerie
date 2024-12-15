import { useState } from 'react';
import { useReservationStore } from '../store/reservationStore';
import type { ReservationData } from '../services/api';

export function useReservation() {
  const [formData, setFormData] = useState<Omit<ReservationData, 'date' | 'service'>>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { submitReservation, isLoading, error, success, reset } = useReservationStore();

  const handleSubmit = async (service: string, date: string) => {
    await submitReservation({
      ...formData,
      service,
      date,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    reset();
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    resetForm,
    isLoading,
    error,
    success,
  };
}