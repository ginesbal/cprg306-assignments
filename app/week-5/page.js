import React from "react";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className=" flex flex-col items-center w-1/2 text-xl font-bold p-2">Shopping List</h1>
            <ItemList   />
        </main>
    );
}