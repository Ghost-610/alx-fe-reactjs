import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Adjust this path

const RecipeDetail = () => {
  const { id } = useParams(); // Fetch the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to hold recipe data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the recipe data when the component mounts
    fetch("/data.json") // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => {
        // Find the recipe with the matching ID
        const selectedRecipe = data.find((recipe) => recipe.id === Number(id));
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          setError("Recipe not found");
        }
      })
      .catch((err) => setError("Failed to fetch data"));
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      
      {/* Updated Image with Shadow */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded mb-4 shadow-lg" 
      />
      
      <p className="text-lg mb-4">{recipe.summary}</p>

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;