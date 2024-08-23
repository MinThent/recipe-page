import React from "react";

export default function RecipePic({ imgData }) {
  const { imgUrl, imgAlt } = imgData;
  return (
    <div className="relative md:px-7 md:pt-7 rounded-none md:rounded-xl w-full">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="rounded-none md:rounded-lg w-full h-auto object-cover"
      />
    </div>
  );
}
