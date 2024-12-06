import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Adjust this path based on your project structure

const RecipeDetail = () => {
  const { id } = useParams(); // Extract recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      // Find the recipe by ID from the imported data
      const foundRecipe = data.find((recipe) => recipe.id === parseInt(id, 10));
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setError("Recipe not found");
      }
    };

    fetchRecipe();
  }, [id]);

  // Show an error message if the recipe is not found
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Show a loading indicator while fetching
  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />
      <p className="text-gray-700 text-lg">{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;
