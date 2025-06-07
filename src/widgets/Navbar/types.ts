export interface MenuItem {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export interface MenuItems {
  left: MenuItem[];
  right: MenuItem[];
}
