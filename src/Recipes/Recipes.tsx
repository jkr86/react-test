import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
