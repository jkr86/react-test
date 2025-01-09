import { IngredientWithQuantityType } from "../Ingredients/IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};
