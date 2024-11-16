import { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),

    // Action to add a new recipe
    addRecipe: (recipe) => set((state) => ({
        recipes: [...state.recipes, recipe],
    })),
    // Action to update an existing recipe
    updateRecipe: (id, updatedData) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedData } : recipe
        ),
    })),
    // Action to delete a recipe
    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),




}));