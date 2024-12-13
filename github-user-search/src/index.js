// src/index.js
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Import the CSS styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
