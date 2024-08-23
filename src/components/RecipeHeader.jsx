import React from "react";

export default function RecipeHeader({ title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-rose-red">{description}</p>
    </div>
  );
}
