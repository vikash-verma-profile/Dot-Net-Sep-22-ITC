import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
setupIonicReact();
