import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { DesktopNavProps } from "@/interfaces/componentsInterface";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import { HERO_CONFIG } from "@/utils/constants";

const DesktopNav = ({
  items,
  currentPath,
  isDark,
  onThemeToggle,
  onNavigate,
}: DesktopNavProps) => {
  return (
    <div className="hidden md:flex md:gap-x-8 items-center">
      {items.map((item) => (
        <NavLink
          key={item.name}
          href={item.href}
          active={currentPath === item.href}
          onClick={() => onNavigate(item.href)}
        >
          {item.name}
        </NavLink>
      ))}
      <Link href="#contact">
        <button className="mt-0 px-6 py-2 font-bold relative overflow-hidden rounded-lg border-2 border-gold-500 text-gold-500 transition-all duration-300 before:absolute before:inset-0 before:bg-gold-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left hover:text-white group">
          <span className="relative z-10">{HERO_CONFIG.cta.primary}</span>
        </button>
      </Link>
      <Button variant="icon" onClick={onThemeToggle}>
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default DesktopNav;
