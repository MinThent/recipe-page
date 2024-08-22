import React from "react";

export default function Instructions({ recipeSteps }) {
  return (
    <div>
      <h2>Instructions</h2>
      <ul>
        {recipeSteps.map((recipeStep, index) => {
          return <li key={index}>{recipeStep}</li>;
        })}
      </ul>
    </div>
  );
}
