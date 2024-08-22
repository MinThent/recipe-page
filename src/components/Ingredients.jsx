import React from "react";

export default function Ingredients({ recipeItems }) {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {recipeItems.map((recipeItem, index) => {
          return <li key={index}>{recipeItem}</li>;
        })}
      </ul>
    </div>
  );
}
