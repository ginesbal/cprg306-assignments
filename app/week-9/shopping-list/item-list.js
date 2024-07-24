"use client";
import React, { useState } from 'react';
import Item from './item';

function ItemList({ items = [], onItemSelect = () => {}, onClearItem = () => {}, onClearItems = () => {} }) {
    const [sortBy, setSortBy] = useState('name');
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className="p-4 m-4 bg-neutral-300 text-black font-semibold max-w-sm w-full rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-4">
                <span className="text-gray-700 font-semibold mb-2">Sort By:</span>
                <div className="flex">
                    <button
                        className="bg-yellow-800 px-4 py-2 m-2 rounded-lg hover:bg-yellow-700 text-white"
                        onClick={() => setSortBy('name')}
                    >
                        Name
                    </button>
                    <button
                        className="bg-yellow-800 px-4 py-2 m-2 rounded-lg hover:bg-yellow-700 text-white"
                        onClick={() => setSortBy('category')}
                    >
                        Category
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {sortedItems.length > 0 ? (
                    <ul className="w-full">
                        {sortedItems.map(item => (
                            <Item
                                key={item.id}
                                {...item}
                                onSelect={() => onItemSelect(item.name)}
                                onClear={() => onClearItem(item.id)}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-700 mt-4">No items to display</p>
                )}
            </div>
            {sortedItems.length > 0 && (
                <div className="flex justify-center mt-4">
                    <button
                        className="font-light text-xs px-6 py-2 rounded hover:underline hover:text-red-500"
                        onClick={onClearItems}
                    >
                        Clear All
                    </button>
                </div>
            )}
        </div>
    );
}

export default ItemList;



