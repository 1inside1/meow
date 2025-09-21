import React from 'react';
import '../assets/styles.css';

const Button = ({ children, variant = 'default', onClick, className = '' }) => {
  const baseClasses = 'add-to-cart';
  const variantClasses = {
    default: 'border-green text-green',
    active: 'bg-orange text-white border-orange',
    secondary: 'bg-gray text-gray border-gray'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;