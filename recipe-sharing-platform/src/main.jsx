import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HomePage />
    <RecipeDetail /> */}
  </StrictMode>,
)
