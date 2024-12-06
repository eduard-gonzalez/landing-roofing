import { ButtonProps } from "@/interfaces/componentsInterface"

const Button = ({
    variant = 'primary',
    children,
    onClick,
    className = '',
    fullWidth = false
}: ButtonProps) => {
    const baseStyles = 'transition-colors font-medium'
    const variantStyles = {
        primary: 'text-white bg-gold-500 hover:bg-gold-600 px-4 py-2 rounded-md',
        icon: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full'
    }
    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;