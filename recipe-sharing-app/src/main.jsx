import React from 'react'; // Import React explicitly
import { createRoot } from 'react-dom/client'; // Correct usage of createRoot
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx'; // Main App Component

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
