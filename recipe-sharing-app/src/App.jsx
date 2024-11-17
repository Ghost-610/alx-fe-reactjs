import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList'; // Import the FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Import the RecommendationsList

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList /> {/* Display favorites */}
                <RecommendationsList /> {/* Display recommendations */}
              </>
            }
          />

          {/* Recipe Details Route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Edit Recipe Route */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
