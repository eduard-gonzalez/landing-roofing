
import { Sun, Moon } from 'lucide-react'
import { DesktopNavProps } from '@/interfaces/componentsInterface'
import Button  from '@/components/ui/Button'
import NavLink from '@/components/ui/NavLink'


const DesktopNav = ({ items, currentPath, isDark, onThemeToggle }: DesktopNavProps) => {
    return (
        <div className="hidden md:flex md:gap-x-8 items-center">
            {items.map((item) => (
                <NavLink key={item.name} href={item.href} active={currentPath === item.href}>
                    {item.name}
                </NavLink>
            ))}
            <Button className="ml-8">Cotizar Ahora</Button>
            <Button variant="icon" onClick={onThemeToggle}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        </div>
    )
}


export default DesktopNav
