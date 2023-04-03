import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';
import AuthProvider from './Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingProvider>
          <App />
        </SettingProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>

);
