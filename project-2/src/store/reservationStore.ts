import { create } from 'zustand';
import { sendReservation, ReservationData } from '../services/api';

interface ReservationStore {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  submitReservation: (data: ReservationData) => Promise<void>;
  reset: () => void;
}

export const useReservationStore = create<ReservationStore>((set) => ({
  isLoading: false,
  error: null,
  success: false,
  submitReservation: async (data) => {
    set({ isLoading: true, error: null, success: false });
    try {
      await sendReservation(data);
      set({ success: true });
    } catch (error) {
      set({ error: 'Erreur lors de l\'envoi de la réservation. Veuillez réessayer.' });
    } finally {
      set({ isLoading: false });
    }
  },
  reset: () => set({ isLoading: false, error: null, success: false }),
}));