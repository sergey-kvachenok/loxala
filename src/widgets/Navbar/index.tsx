import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoxalaLogo } from '@/shared/ui/icons';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuItems {
  left: MenuItem[];
  right: MenuItem[];
}

const menuItems: MenuItems = {
  left: [
    {
      label: 'Menu item A',
      href: '/',
    },
    {
      label: 'Menu item B',
      href: '/',
    },
    {
      label: 'Menu item C',
      href: '/',
    },
  ],
  right: [
    {
      label: 'Menu item X',
      href: '/',
    },

    {
      label: 'Menu item Y',
      href: '/',
    },
  ],
};

export const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between font-family-aktiv-grotesk text-grey/80 py-10 px-5 xl:px-10 2xl:px-20 border-b border-light-grey-stroke">
      <LoxalaLogo />

      <div className="flex items-center gap-10">
        {menuItems.left.map((item) => (
          <Link key={item.label} to={item.href} className="text-15">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-10">
        {menuItems.right.map((item) => (
          <Link key={item.label} to={item.href} className="text-15">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
