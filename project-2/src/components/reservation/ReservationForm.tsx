import React from 'react';
import type { ReservationFormData } from '../../types/reservation';

interface ReservationFormProps {
  formData: ReservationFormData;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCancel: () => void;
}

export function ReservationForm({
  formData,
  isSubmitting,
  error,
  onSubmit,
  onChange,
  onCancel
}: ReservationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-[#C4A484] focus:border-[#C4A484]"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-[#C4A484] focus:border-[#C4A484]"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone *
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-[#C4A484] focus:border-[#C4A484]"
          value={formData.phone}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border rounded-md focus:ring-[#C4A484] focus:border-[#C4A484]"
          value={formData.message}
          onChange={onChange}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#C4A484] hover:bg-[#B08968] text-white rounded-md disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
}