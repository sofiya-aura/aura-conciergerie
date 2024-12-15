import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C4A484] focus:border-[#C4A484] ${className}`}
        {...props}
      />
    </div>
  );
}