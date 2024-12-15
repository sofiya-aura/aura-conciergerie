import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { FormStatus } from '../ui/FormStatus';

export function ContactForm() {
  const {
    formData,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Nom complet"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={2}
        disabled={isSubmitting}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        minLength={10}
        disabled={isSubmitting}
      />

      {(error || success) && (
        <FormStatus
          error={error}
          success={success}
          successMessage="Votre message a été envoyé avec succès !"
        />
      )}

      <Button
        type="submit"
        isLoading={isSubmitting}
        loadingText="Envoi en cours..."
        disabled={isSubmitting}
      >
        Envoyer
      </Button>
    </form>
  );
}