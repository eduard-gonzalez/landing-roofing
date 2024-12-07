import Link from 'next/link';
import { SITE_CONFIG } from '@/utils/constants';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href='/'
      className={`text-2xl font-bold tracking-tight transition-colors hover:opacity-90 ${className}`}
    >
      <span className='text-gray-900 dark:text-white'>
        {SITE_CONFIG.name.split('Roof')[0]}
      </span>
      <span className='text-gold-500'>Roof</span>
    </Link>
  );
};

export default Logo;
