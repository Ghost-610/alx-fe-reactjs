import React from 'react';
import { useRecipeStore } from './recipeStore'; // Ensure the store is correctly imported.
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access deleteRecipe action from Zustand store.
    const navigate = useNavigate();

    const handleDelete = () => {
        // Delete the recipe from the store.
        deleteRecipe(recipeId);

        // Navigate to the home or another appropriate page.
        navigate('/');
    };

    return (
        <button onClick={handleDelete}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
