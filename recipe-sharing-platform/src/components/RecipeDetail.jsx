import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data.json"     // Adjust the path based on your folder structure

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the route
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      try {
        // Find the recipe by ID in the data.json
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id, 10));
        if (!foundRecipe) {
          throw new Error("Recipe not found");
        }
        setRecipe(foundRecipe);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mb-4 w-48 h-48 object-cover" />
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;