import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    favorites: [], // Add favorites array to store user favorites

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

    // Action to add a recipe to favorites
    addFavorite: (recipeId) => set((state) => ({
        favorites: [...state.favorites, recipeId]
    })),

    // Action to remove a recipe from favorites
    removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId)
    })),

    // Action to generate personalized recommendations based on favorites
    recommendations: [],
    generateRecommendations: () => set((state) => {
        // Example recommendation logic: Select recipes that are in the favorites list
        const recommended = state.recipes.filter((recipe) =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomized mock recommendation
        );
        return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
