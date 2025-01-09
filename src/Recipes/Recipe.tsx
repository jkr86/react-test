import { RecipeType } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../Tags/Tags";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
    const [showSteps, setShowSteps] = useState<Boolean>(false);
    const [showIngredients, setShowIngredients] = useState<boolean>(false);

    return (
        <div className="rounded-md overflow-hidden shadow-md">
            <img alt="" className="object-center h-64 object-cover w-full" src={recipe.imageURL} />
            <div className="pt-4 p-6 bg-gray-100">
                <h2 className="font-semibold">Nom de la recette: {recipe.nom}</h2>
                <p className="text-gray-600 text-sm">{recipe.description}</p>
                <div>
                    <Tags tags={recipe.tags} />
                </div>
                <div>
                    <span>Ingrédients</span>:
                    <button className="px-6 bg-blue-400 py-1 rounded-md ml-4 text-m" onClick={() => setShowIngredients(!showIngredients)}>
                        {showIngredients ? "Masquer" : "Afficher"}
                    </button>
                    {showIngredients && <IngredientsWithQuantity ingredientsWithQuantity={recipe.ingredientsWithQuantity} />}
                </div>
                <div className="mt-4">
                    <div>
                        <span>Etapes de la recette: </span>
                        <button className="px-6 bg-blue-400 py-1 rounded-md ml-4 text-sm" onClick={() => setShowSteps(!showSteps)}>
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
