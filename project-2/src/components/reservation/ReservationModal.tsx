import React from 'react';
import Calendar from 'react-calendar';
import { ReservationForm } from './ReservationForm';
import type { ReservationFormData } from '../../types/reservation';
import 'react-calendar/dist/Calendar.css';

interface ReservationModalProps {
  title: string;
  selectedDate: Date | null;
  formData: ReservationFormData;
  isSubmitting: boolean;
  onDateChange: (date: Date) => void;
  onFormSubmit: (e: React.FormEvent) => void;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClose: () => void;
}

export function ReservationModal({
  title,
  selectedDate,
  formData,
  isSubmitting,
  onDateChange,
  onFormSubmit,
  onFormChange,
  onClose,
}: ReservationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-playfair mb-6">Réserver {title}</h3>
        <div className="mb-6">
          <Calendar
            onChange={(date) => onDateChange(date as Date)}
            value={selectedDate}
            minDate={new Date()}
            className="mx-auto"
          />
        </div>
        {selectedDate && (
          <ReservationForm
            formData={formData}
            isSubmitting={isSubmitting}
            onSubmit={onFormSubmit}
            onChange={onFormChange}
            onCancel={onClose}
          />
        )}
      </div>
    </div>
  );
}