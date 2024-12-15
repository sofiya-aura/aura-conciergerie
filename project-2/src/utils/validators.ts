export const validateName = (name: string): string | null => {
  if (!name || name.trim().length < 2) {
    return 'Le nom doit contenir au moins 2 caractères';
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return 'Veuillez entrer une adresse email valide';
  }
  return null;
};

export const validateMessage = (message: string): string | null => {
  if (!message || message.trim().length < 10) {
    return 'Le message doit contenir au moins 10 caractères';
  }
  return null;
};