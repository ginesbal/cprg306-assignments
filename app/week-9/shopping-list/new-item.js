"use client";
import React, { useId, useState } from "react";

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const id = useId();
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            id,
            name,
            quantity,
            category
        };
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div className="flex justify-center p-4 ">
            <div className="p-4 bg-neutral-300 text-black font-bold w-60 h-60 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4 text-center">Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor={`${id}-name`} className="sr-only">Item Name</label>
                        <input
                            type="text"
                            id={`${id}-name`}
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full font-normal px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-800"
                            placeholder="Item Name"
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <label htmlFor={`${id}-quantity`} className="sr-only">Quantity</label>
                        <input
                            type="number"
                            id={`${id}-quantity`}
                            name="quantity"
                            autoComplete="off"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                            className="w-1/3 px-4 py-2 border-2 border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-800"
                            placeholder="Qty"
                        />
                        <label htmlFor={`${id}-category`} className="sr-only">Category</label>
                        <select
                            id={`${id}-category`}
                            name="category"
                            autoComplete="off"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="w-5/6 ml-2 px-3 py-2 border-2 border-gray-300 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-800"
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
                        className="w-full py-2 bg-yellow-800 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewItem;
