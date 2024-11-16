import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // Ensure the store is correctly imported.
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    const updateRecipe = useRecipeStore((state) => state.updateRecipe); // Use updateRecipe from Zustand store.
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page.

        // Update the recipe using the Zustand store.
        updateRecipe(recipe.id, { title, description });

        // Navigate back to the recipe details or list.
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;
