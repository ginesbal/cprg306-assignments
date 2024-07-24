"use client";
import React from "react";

const Item =({ id, name, quantity, category, onSelect }) => {
    return (
        <div onClick={onSelect} className="cursor-pointer">
        <li className="curser-pointer flex flex-col items-center p-1 bg-neutral-300 hover:bg-neutral-400 text-black border-2 border-transparent border-t-black">
            <span className="text-medium font-bold">{name}</span>
            <span className="text-xs">
                Buy {quantity} in {category}
            </span>
        </li>
        </div>
    );
};

export default Item;
