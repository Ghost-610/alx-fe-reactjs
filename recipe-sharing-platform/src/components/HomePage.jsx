import React, { useState, useEffect } from "react";
import recipeData from "../data.json";

const HomePage=()=> {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        // Load the recipe data from the data.json file
        fetch("/data.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch recipe data.");
            }
            return response.json();
          })
          .then((data) => setRecipes(data))
          .catch((error) => console.error("Error fetching recipes:", error));
      }, []);
    
      return (
        <div className="min-h-screen bg-gray-50 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Recipe List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
    
    export default HomePage;