import React from "react";

export default function Ingredients({ recipeItems }) {
  return (
    <div className="flex flex-col gap-4 text-rose-red">
      <h2 className="text-2xl">Ingredients</h2>
      <ul className="flex flex-col gap-1 px-5 list-disc">
        {recipeItems.map((recipeItem, index) => {
          return (
            <li key={index}>
              <p className="ml-5">{recipeItem}</p>
            </li>
          );
        })}
      </ul>
      <hr/>
    </div>
  );
}
