import React from "react";

export default function Nutrition({ nutritionData }) {
  const { calories, carbs, protein, fat } = nutritionData;
  return (
    <div>
      <ul>
        <li>{calories}</li>
        <li>{carbs}</li>
        <li>{protein}</li>
        <li>{fat}</li>
      </ul>
    </div>
  );
}
