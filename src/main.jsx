import React from 'react';
import './i18n';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes'; // This is your defined router
import "./index.css";
import Context from './Shared/Context/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <QueryClientProvider client ={queryClient}>

      <RouterProvider router={router} />
      </QueryClientProvider>
    </Context>
  </React.StrictMode>
);
