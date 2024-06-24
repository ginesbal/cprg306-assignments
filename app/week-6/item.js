import React from "react";

const Item =({ name, quantity, category }) => {
    return (
        <div className="items-center">
        <li className="flex flex-col items-center p-1 bg-gray-800 text-white border-2 border-gray-700">
            <span className="text-medium font-semibold">{name}</span>
            <span className="text-xs">
                Buy {quantity} in {category}
            </span>
        </li>
        </div>
    );
};

export default Item;
