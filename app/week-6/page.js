"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";

const Page  = () => {
    const [items, setItems] = useState(itemsData || []);

    const handleAddItem = (newItem) => {
        setItems((prevItems) =>  [...prevItems, newItem]);
    };

    return (
        <div>
            <h1 className=" flex justify-center font-bold text-xl">Shopping List</h1>
            <div className ="flex justify-center">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </div>
    );
};
export default Page;