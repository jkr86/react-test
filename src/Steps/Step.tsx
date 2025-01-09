import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { StepType } from "./StepType";

export const Step = ({ etape }: { etape: StepType }) => {
  return (
    <div
      style={{
        backgroundColor: "thistle",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: "10px",
      }}
    >
      <div>
        {etape.order}. {etape.description}
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        {etape.ingredients && (
          <IngredientsWithQuantity
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;
