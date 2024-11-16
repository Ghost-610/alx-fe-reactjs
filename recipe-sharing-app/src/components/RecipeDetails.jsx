// RecipeDetails component
import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
    const { id } = useParams();
    // Logic to fetch or display the recipe details based on `id`

    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
        
    );

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
        </div>
    );
};
export default RecipeDetails