import { RecipeType } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../Tags/Tags";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxShadow: "5px 5px 7px 2px rgba(0,0,0,0.76)",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "200px",
          width: "70%",
          backgroundImage: `url(${recipe.imageURL})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          width: "100%",
        }}
      >
        <h2>Nom de la recette: {recipe.nom}</h2>
        <div
          style={{
            padding: "10px",
          }}
        >
          {recipe.description}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tags tags={recipe.tags} />
        </div>
        <div
          style={{
            backgroundColor: "blanchedalmond",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Etapes de la recette:
            <button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </button>
          </div>
          {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
