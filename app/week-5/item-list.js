
"use client";
import { useState } from 'react';
import Item from './item';
import items from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className='flex flex-col m-4 '>
            <div className='flex flex-col w-1/2 p-1'>
                <label className='flex flex-col items-center p-1 text-white '>Sort by:</label>
            </div>
            <div className='flex flex-row justify-around w-1/2 p-1'>
                <button className='bg-orange-700 px-5 py-2 m-2 rounded'
                onClick={() => setSortBy('name')}
                >
                Sort by Name
                </button>

                <button className='bg-orange-700 px-5 py-2 m-2 rounded'
                    onClick={() => setSortBy('category')}
                >
                Sort by Category
                </button>
            </div>
            <ul className = "flex flex-col w-1/2 p-1 bg-gray-800 text-white">
                {sortedItems.map(item => (
                    <Item key={item.id} {...item} />
                    ))}
            </ul>
        </div>
    );
};

export default ItemList;