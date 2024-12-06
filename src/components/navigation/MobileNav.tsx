import Button from '@/components/ui/Button'
import NavLink from '@/components/ui/NavLink'
import { MobileNavProps } from '@/interfaces/componentsInterface'

const MobileNav = ({ items, currentPath, isOpen, onClose }: MobileNavProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 top-[73px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-6">
                {items.map((item) => (
                    <NavLink
                        key={item.name}
                        href={item.href}
                        active={currentPath === item.href}
                        onClick={onClose}
                    >
                        {item.name}
                    </NavLink>
                ))}
                <Button fullWidth>Cotizar Ahora</Button>
            </nav>
        </div>
    )
}

export default MobileNav;