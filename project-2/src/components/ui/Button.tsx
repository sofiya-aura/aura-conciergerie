import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  isLoading,
  loadingText,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "w-full px-6 py-3 rounded-full transition-colors font-medium";
  const variantStyles = {
    primary: "bg-[#C4A484] hover:bg-[#B08968] text-white disabled:bg-gray-400",
    secondary: "border-2 border-[#C4A484] text-[#C4A484] hover:bg-[#C4A484] hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          {loadingText}
        </span>
      ) : children}
    </button>
  );
}