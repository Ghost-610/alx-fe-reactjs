import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeList from './components/RecipeList'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddRecipeForm />
  </StrictMode>,
)
