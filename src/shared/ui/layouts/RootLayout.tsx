import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';

const RootLayout: React.FC = () => {
  return (
    <div
      className="flex flex-col"
      style={{ height: '100dvh', minHeight: '100vh' }}
    >
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
