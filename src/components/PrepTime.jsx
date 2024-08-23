import React from "react";

export default function PrepTime({ prepTime }) {
  return (
    <div className="flex flex-col gap-2 bg-[#fff7fc] px-6 py-5 rounded-xl w-full">
      <h3 className="font-semibold text-blue-950 text-xl">Preparation time</h3>
      <ul className="flex flex-col gap-1 px-5 list-disc">
        {prepTime.map((timeTaken, index) => {
          const [boldPart, normalPart] = timeTaken.split(": ");
          return (
            <li>
              <p className="ml-5 text-rose-red">
                <span className="font-semibold">{boldPart}</span>
                <span>: {normalPart}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
