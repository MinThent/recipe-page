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
    <div>
      <RecipePic imgData={imgData} />
      <RecipeHeader title={title} description={description}/>
      <PrepTime prepTime={prepTime} />
      <Ingredients recipeItems={ingredients} />
      <Instructions recipeSteps={instructions} />
      <Nutrition nutritionData={nutritions} />
    </div>
  );
}
