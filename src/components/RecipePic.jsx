import React from "react";

export default function RecipePic({ imgData }) {
  const { imgUrl, imgAlt } = imgData;
  return (
    <div>
      <img src={imgUrl} alt={imgAlt}></img>
    </div>
  );
}
