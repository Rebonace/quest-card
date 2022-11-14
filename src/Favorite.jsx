import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  if (favorite === false) {
    return (
      <div onClick={handleFavorite}>
        <FaRegHeart size={30} cursor="pointer" />{" "}
      </div>
    );
  } else {
    return (
      <div onClick={handleFavorite}>
        <FaHeart size={30} cursor="pointer" />
      </div>
    );
  }
}
