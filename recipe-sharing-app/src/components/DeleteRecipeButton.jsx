import React from 'react';
import useRecipeStore from './recipeStore'; // Adjust import based on export type
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access deleteRecipe action
    const navigate = useNavigate();

    const handleDelete = () => {
        // Confirmation before deletion
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(recipeId); // Delete recipe from the store
            navigate('/'); // Redirect to home page
        }
    };

    return (
        <button className="delete-recipe-button" onClick={handleDelete}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
