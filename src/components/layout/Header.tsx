'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import DesktopNav from '@/components/navigation/DesktopNav'
import MobileNav from '@/components/navigation/MobileNav'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/utils/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark' || (!storedTheme && mediaQuery.matches)) {
      root.classList.add('dark')
      setIsDark(true)
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (!storedTheme) {
        setIsDark(e.matches)
        root.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    const newTheme = root.classList.contains('dark') ? 'light' : 'dark'
    root.classList.toggle('dark', newTheme === 'dark')
    setIsDark(newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">   <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <Logo />
      <DesktopNav
        items={Object.entries(ROUTES).map(([name, href]) => ({ name, href }))}
        currentPath={pathname}
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />
      <Button
        variant="icon"
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <MobileNav
        items={Object.entries(ROUTES).map(([name, href]) => ({ name, href }))}
        currentPath={pathname}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
    </header>
  )
}