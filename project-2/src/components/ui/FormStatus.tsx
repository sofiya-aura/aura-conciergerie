import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormStatusProps {
  error: string | null;
  success: boolean;
}

export function FormStatus({ error, success }: FormStatusProps) {
  if (!error && !success) return null;

  return (
    <div className={`p-4 rounded-md ${error ? 'bg-red-50' : 'bg-green-50'}`}>
      <div className="flex items-center">
        {error ? (
          <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
        ) : (
          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
        )}
        <span className={error ? 'text-red-700' : 'text-green-700'}>
          {error || 'Message envoyé avec succès !'}
        </span>
      </div>
    </div>
  );
}