import React from "react";

export default function Nutrition({ nutritionData }) {
  return (
    <div className="flex flex-col gap-4 text-rose-red">
      <h2 className="text-2xl">Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      <div>
      <table className="border-collapse w-full">
          <tbody>
            {nutritionData.map((item, index) => (
              <tr className={index === nutritionData.length - 1 ? "border-b-0" : "border-b border-gray-200"} key={index}>
                <td className="px-10 py-2">{item.nutrient}</td>
                <td className="px-4 font-semibold">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
