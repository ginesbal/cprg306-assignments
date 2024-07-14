"use client";
import React, { useState } from 'react';
import Item from './item';

function ItemList({items = [], onItemSelect = () => {}}) {
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
        <div className= "p-2 m-4 bg-neutral-300 text-black font-bold max-w-sm w-full rounded">
                <button className='bg-yellow-800 px-6 py-2 m-2 rounded'
                onClick={() => setSortBy('name')}
                >
                Sort by Name
                </button>

                <button className='bg-yellow-800 px-6 py-2 m-2 rounded '
                    onClick={() => setSortBy('category')}
                >
                Sort by Category
                </button>
            <div className='flex flex-col items-center'>
                <ul className = "flex flex-col w-full p-1 bg-neutral-300 text-white">
                    {sortedItems.map(item => (
                        <Item
                            onSelect={() => onItemSelect(item.name)}
                            key={item.id}
                            {...item} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemList;