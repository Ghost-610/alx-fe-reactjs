import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>

                        {/* Add a Link to navigate to the recipe details page */}
                        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
                    </div>
                ))
            ) : (
                <p>No recipes found. Try searching for something else.</p>
            )}
        </div>
    );
};

export default RecipeList;
