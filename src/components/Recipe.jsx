import React from "react";
import RecipePic from "./RecipePic";
import RecipeHeader from "./RecipeHeader";
import PrepTime from "./PrepTime";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

export default function Recipe(props) {
  const {
    imgData,
    title,
    description,
    prepTime,
    ingredients,
    instructions,
    nutritions,
  } = props;
  return (
    <div className="flex flex-col items-center bg-white p-0 rounded-xl md:w-1/2 lg:w-2/5">
      <RecipePic imgData={imgData} />
      <div className="flex flex-col gap-4 p-7">
        <RecipeHeader title={title} description={description} />
        <PrepTime prepTime={prepTime} />
        <Ingredients recipeItems={ingredients} />
        <Instructions recipeSteps={instructions} />
        <Nutrition nutritionData={nutritions} />
      </div>
    </div>
  );
}
