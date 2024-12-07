import { ROUTES } from "@/utils/navigation";
import { MobileNavProps } from "@/interfaces/componentsInterface";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";

const MobileNav = ({
  items,
  currentPath,
  isOpen,
  onClose,
  onNavigate,
}: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[73px] bg-white dark:bg-gray-900">
      <nav className="flex flex-col space-y-4 p-6 dark:bg-gray-900 bg-white">
        {items.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            active={currentPath === item.href}
            onClick={() => {
              onNavigate(item.href);
              onClose();
            }}
          >
            {item.name}
          </NavLink>
        ))}
        <Button
          fullWidth
          onClick={() => {
            onNavigate(ROUTES.contact);
            onClose();
          }}
        >
          Request a quote
        </Button>
      
      </nav>
    </div>
  );
};

export default MobileNav;
