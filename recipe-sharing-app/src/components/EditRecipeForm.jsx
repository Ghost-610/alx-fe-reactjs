import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId, onCancel }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const recipes = useRecipeStore((state) => state.recipes);

    // Find the recipe to edit by ID
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);

    // Local state to manage form inputs
    const [formData, setFormData] = useState({
        title: recipeToEdit?.title || '',
        description: recipeToEdit?.description || '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipeId, formData); // Update the recipe in the store
        onCancel(); // Close the form after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Recipe</h3>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditRecipeForm;
