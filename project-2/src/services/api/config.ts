const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    SEND_EMAIL: '/send-email',
    SEND_RESERVATION: '/send-reservation'
  }
} as const;