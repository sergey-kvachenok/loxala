import React from 'react';
import { Link } from 'react-router-dom';
import { LoxalaLogo } from '@/shared/ui/icons';
import type { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-light-grey-stroke">
          <Link to="/" onClick={onClose}>
            <LoxalaLogo />
          </Link>
          <button
            onClick={onClose}
            className="text-2xl text-grey hover:text-black transition-colors cursor-pointer"
          >
            ×
          </button>
        </div>

        <nav className="p-5">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block text-lg text-grey hover:text-black transition-colors py-2 font-family-aktiv-grotesk"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
