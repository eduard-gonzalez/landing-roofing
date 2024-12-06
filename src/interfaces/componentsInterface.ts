export interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonProps {
  variant?: "primary" | "icon";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export interface DesktopNavProps {
  items: Array<{ name: string; href: string }>;
  currentPath: string;
  isDark: boolean;
  onThemeToggle: () => void;
}
export interface MobileNavProps {
  items: Array<{ name: string; href: string }>;
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
}
