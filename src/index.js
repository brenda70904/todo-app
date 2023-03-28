import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingProvider>
        <App />
      </SettingProvider>
    </MantineProvider>
  </React.StrictMode>

);
