export interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
  onClick?: (href: string) => void
}

export interface ButtonProps {
  variant?: "primary" | "icon";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}
export interface NavItem {
  name: string;
  href: string;
}

export interface DesktopNavProps {
  items: NavItem[];
  currentPath: string;
  isDark: boolean;
  onThemeToggle: () => void;
  onNavigate: (href: string) => void;
}

export interface MobileNavProps {
  items: NavItem[];
  currentPath: string;
  isOpen: boolean;
  isDark: boolean;
  onThemeToggle: () => void;
  onClose: () => void;
  onNavigate: (href: string) => void;
}
