import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    
      <div className="grid grid-cols-3 gap-4 mt-10">
        {recipes.map((obj) => (
          <Recipe recipe={obj} />
        ))}
      </div>
  );
};

export default Recipes;
