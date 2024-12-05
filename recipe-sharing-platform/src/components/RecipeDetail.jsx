import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data.json"; // Adjust the path based on your folder structure

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the route parameters
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (!selectedRecipe) {
          throw new Error('Recipe not found');
        }
        setRecipe(selectedRecipe);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;
