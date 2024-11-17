import React from 'react';
// RecipeList component
import useRecipeStore from './recipeStore'; // Adjust based on how `useRecipeStore` is exported

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p className="no-recipes-message">No recipes found. Try searching for something else.</p>
            )}
        </div>
    );
};

export default RecipeList;
