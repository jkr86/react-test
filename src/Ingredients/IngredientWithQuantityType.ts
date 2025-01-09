import { IngredientType } from "./IngredientType";

export type IngredientWithQuantityType = {
  ingredient: IngredientType;
  unit?: string;
  quantity: number;
};
