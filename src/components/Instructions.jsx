import React from "react";

export default function Instructions({ recipeSteps }) {
  return (
    <div className="flex flex-col gap-4 text-rose-red">
      <h2 className="text-2xl">Instructions</h2>
      <ul className="flex flex-col gap-1 px-5 list-decimal">
        {recipeSteps.map((recipeStep, index) => {
          const [boldPart, normalPart] = recipeStep.split(": ");
          return (
            <li key={index}>
              <p className="ml-5">
                <span className="font-bold">{boldPart}</span>
                <span>: {normalPart}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <hr/>
    </div>
  );
}
