import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import RootLayout from './shared/ui/layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import { ItemA } from './pages/ItemA';
import { ItemB } from './pages/ItemB';
import { ItemC } from './pages/ItemC';
import { ItemX } from './pages/ItemX';
import { ItemY } from './pages/ItemY';
import { ErrorPage } from './pages/ErrorPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/item-a" element={<ItemA />} />
          <Route path="/item-b" element={<ItemB />} />
          <Route path="/item-c" element={<ItemC />} />
          <Route path="/item-x" element={<ItemX />} />
          <Route path="/item-y" element={<ItemY />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
