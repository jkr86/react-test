import Ingredient from "./Ingredient";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import { IngredientWithQuantity } from "./IngredientWithQuantity";

export const IngredientsWithQuantity = ({
  ingredientsWithQuantity
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {ingredientsWithQuantity.map((obj) => (
        <IngredientWithQuantity ingredientWithQuantity={obj} />
      ))}
    </>
  );
};

export default IngredientsWithQuantity;
