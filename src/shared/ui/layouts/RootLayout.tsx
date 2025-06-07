import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';

const RootLayout: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
