import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '', // Add searchTerm to store state
    filteredRecipes: [],

    // Action to set the recipes list
    setRecipes: (recipes) => set({ recipes }),

    // Action to set the search term
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Action to filter recipes based on search term
    filterRecipes: () => set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
    })),

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

export default useRecipeStore;
