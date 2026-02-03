import React from "react";

export default function Button() {
  return (
    <button
      className="
        bg-blue-500 text-white
        px-4 py-2
        rounded-md
        font-bold
        transition-colors duration-200 ease-in-out
        hover:bg-blue-600
      "
    >
      クリックしてね
    </button>
  );
}
