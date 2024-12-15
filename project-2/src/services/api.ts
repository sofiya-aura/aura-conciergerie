import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  date: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function sendReservation(data: ReservationData): Promise<ApiResponse> {
  try {
    const response = await axios.post<ApiResponse>(`${API_URL}/send-reservation`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse>;
      if (axiosError.response?.data) {
        return axiosError.response.data;
      }
      throw new Error(axiosError.message);
    }
    throw new Error('Une erreur est survenue lors de l\'envoi de la réservation');
  }
}