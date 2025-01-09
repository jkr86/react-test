import { IngredientType } from "../Ingredients/IngredientType";
import { StepType } from "../Steps/StepType";
import { IngredientWithQuantityType } from "../Ingredients/IngredientWithQuantityType";
import { TagType } from "../Tags/TagType";

export type RecipeType = {
  nom: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  etapes?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
};

export type ListOfRecipes = RecipeType[];
