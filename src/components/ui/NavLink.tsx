import Link from 'next/link'
import { NavLinkProps } from '@/interfaces/componentsInterface'


const NavLink = ({ href, active, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      onClick?.(href)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium transition-colors ${
        active
          ? 'text-gold-500'
          : 'text-gray-700 hover:text-gold-500 dark:text-gray-300 dark:hover:text-gold-400'
      }`}
    >
      {children}
    </Link>
  )
}

export default NavLink