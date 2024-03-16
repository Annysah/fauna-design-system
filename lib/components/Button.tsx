import React from 'react';

type ButtonVariant = 'filled' | 'hovered' | 'disabled';
type ButtonColor = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const baseStyles =
    'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';
  const sizeStyles = {
    small: 'py-1 px-2 text-sm w-28 h-12',
    medium: 'py-2 px-4 w-32 h-14',
    large: 'py-3 px-6 text-lg w-36 h-16',
  };
  const colorStyles = {
    primary: {
      filled: 'bg-primary-600 text-white focus:ring-blue-400 cursor-pointer',
      hovered: 'bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-blue-400 cursor-pointer',
      disabled: 'bg-neutral-300 text-white cursor-not-allowed pointer-events-none'
    },
    secondary: {
      filled: 'bg-transparent border border-primary-600 text-primary-600 focus:ring-blue-400 cursor-pointer',
      hovered: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-700 hover:text-white focus:ring-blue-400 cursor-pointer',
      disabled: 'bg-neutral-300 text-white cursor-not-allowed pointer-events-none'
    },
    tertiary: {
      filled: 'bg-primary-100 text-primary-600 focus:ring-blue-400 cursor-pointer',
      hovered: 'bg-primary-100 text-primary-600 hover:bg-primary-700 hover:text-white focus:ring-blue-400 cursor-pointer',
      disabled: 'bg-neutral-300 text-white cursor-not-allowed pointer-events-none'
    },
  };
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button