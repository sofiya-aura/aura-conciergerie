export function validateEmailData(data) {
  const { name, email, message } = data;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }

  if (!email || !email.includes('@')) {
    errors.push('Email invalide');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }

  return {
    error: errors.length > 0 ? { details: errors } : null
  };
}