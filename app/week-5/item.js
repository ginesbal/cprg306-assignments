
import React from "react";
export default function Item({ name, quantity, category }) {
    return (
        <li className="flex flex-col items-center p-1 bg-gray-800 text-white border-2 border-gray-700">
            <span className="text-medium font-semibold">{name}</span>
            <span className="text-xs">
                Buy {quantity} in {category}
            </span>
        </li>
    );
}
