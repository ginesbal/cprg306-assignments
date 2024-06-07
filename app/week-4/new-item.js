"use client";
import { useState } from "react";

export default function NewItem () {
    const [name, setName] = useState ("");
    const [quantity, setQuantity] = useState (1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {name, quantity, category};
        console.log (item);
        alert (`Item: ${name} | Quantity: ${quantity} | Category: ${category}`);
        setName ("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <form onSubmit= {handleSubmit} className= "p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                placeholder="Item Name"
                />
            </div>
            <div className="flex justify-between">
                <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
                className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                />
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                >
                    <option value="" disabled>Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
                <button
                type="submit"
                className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    +
                </button>
        </form>
    );
}