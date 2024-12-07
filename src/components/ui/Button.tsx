import { useEffect, useRef } from 'react';
import { ButtonProps } from '@/interfaces/componentsInterface';
import gsap from 'gsap';

const Button = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  fullWidth = false
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const baseStyles = 'font-medium transition-all duration-300';
  const variantStyles = {
    primary: 'text-white bg-gold-500 px-6 py-2 rounded-lg relative overflow-hidden group',
    icon: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full'
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;