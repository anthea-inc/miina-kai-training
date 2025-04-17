import React from "react";

export default function Card({ title, children }) {
  return (
    <div
      className="
        p-4
        border border-gray-200
        rounded-lg
        bg-gray-50
        shadow-md
        max-w-xs
      "
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
      <div className="text-gray-500 leading-relaxed">{children}</div>
    </div>
  );
}
