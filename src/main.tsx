import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<RootLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="/item-a" element={<ItemA />} />
//           <Route path="/item-b" element={<ItemB />} />
//           <Route path="/item-c" element={<ItemC />} />
//           <Route path="/item-x" element={<ItemX />} />
//           <Route path="/item-y" element={<ItemY />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>,
// );
