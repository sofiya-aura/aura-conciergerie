import { useState } from 'react';
import { submitContactForm } from '../services/firebase/contact';
import { validateName, validateEmail, validateMessage } from '../utils/validators';
import type { ContactFormData } from '../types/contact';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  message: ''
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (nameError) errors.push(nameError);
    if (emailError) errors.push(emailError);
    if (messageError) errors.push(messageError);

    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join('\n'));
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setSuccess(true);
        setFormData(initialFormState);
      } else {
        setError(response.error || 'Une erreur est survenue');
      }
    } catch (err) {
      setError('Une erreur inattendue est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit
  };
}