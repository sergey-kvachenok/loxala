import React from 'react';
import { Outlet } from '@tanstack/react-router';
import { Navbar } from '@/widgets/Navbar';

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col" style={{ height: '100dvh' }}>
      <div className="container">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
