import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C4A484] focus:border-[#C4A484] ${className}`}
        {...props}
      />
    </div>
  );
}