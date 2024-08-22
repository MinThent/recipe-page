import React from "react";

export default function Nutrition({ nutritionData }) {
  return (
    <div>
        <h2>
            Nutrition
        </h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <table>
        <tbody>
          {nutritionData.map((item, index) => (
            <tr key={index}>
              <td>{item.nutrient}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
