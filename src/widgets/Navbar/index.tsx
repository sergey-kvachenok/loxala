import { useState } from 'react';
import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { LoxalaLogo, HamburgerIcon } from '@/shared/ui/icons';
import { MobileMenu } from '@/widgets/Navbar/MobileMenu';
import type { MenuItems } from './types';
import { IconButton } from '@/shared/ui/components/buttons';

const menuItems: MenuItems = {
  left: [
    {
      label: 'Menu item A',
      href: '/item-a',
    },
    {
      label: 'Menu item B',
      href: '/item-b',
    },
    {
      label: 'Menu item C',
      href: '/item-c',
    },
  ],
  right: [
    {
      label: 'Menu item X',
      href: '/item-x',
    },

    {
      label: 'Menu item Y',
      href: '/item-y',
    },
  ],
};

const allMenuItems = [...menuItems.left, ...menuItems.right];

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between font-family-aktiv-grotesk text-grey/80 max-md:py-5 md:py-10 max-sm:px-5 sm:px-5 xl:px-10 2xl:px-20 border-b border-light-grey-stroke">
        <Link to="/">
          <LoxalaLogo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.left.map((item) => (
            <Link key={item.label} to={item.href} className="text-15">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {menuItems.right.map((item) => (
            <Link key={item.label} to={item.href} className="text-15">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <IconButton
          icon={<HamburgerIcon size={24} />}
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        />
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={allMenuItems}
      />
    </>
  );
};
