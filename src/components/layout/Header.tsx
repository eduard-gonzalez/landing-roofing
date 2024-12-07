'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '@/utils/navigation';
import DesktopNav from '@/components/navigation/DesktopNav';
import MobileNav from '@/components/navigation/MobileNav';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navItems = Object.entries(ROUTES).map(([name, href]) => ({
    name,
    href,
  }));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && mediaQuery.matches)) {
      root.classList.add('dark');
      setIsDark(true);
    }

    function handleChange(e: MediaQueryListEvent) {
      if (!storedTheme) {
        setIsDark(e.matches);
        root.classList.toggle('dark', e.matches);
      }
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark', newTheme === 'dark');
    setIsDark(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 rounded-b-3xl backdrop-blur-md">
        <Logo />

        <DesktopNav
          items={navItems}
          currentPath={pathname}
          isDark={isDark}
          onThemeToggle={toggleTheme}
          onNavigate={scrollToSection}
        />

        <Button
          variant="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <MobileNav
          items={navItems}
          currentPath={pathname}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onNavigate={scrollToSection}
        />
      </nav>
    </header>
  );
};

export default Header;
