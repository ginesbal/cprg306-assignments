"use client";
//week-7 imports
import React, { useState } from "react";
import ItemList from "./item-list";
import items from "./items.json";
import MealIdeas from "./meal-ideas";

//week-8 imports
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserAuth } from "../../week-9/_utils/auth-context";

const Page = () => {
// week-7 code
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleSelectItem(name)
    {
        const strings=name.split(",");
        const cleanedName = strings[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
    }
    
// week-8 code
    const { user } = useUserAuth();
    const router = useRouter();
    
    useEffect(() => {
        if (!user) {
            router.push("/week-8");
        }
    }, [user, router]);
    
    if (!user) {
        return null;
        }
        
        return (
            <main className="p-4 bg-stone-900">
            <h1 className=" flex justify-center font-bold text-xl mb-4">Shopping List</h1>
            <div className ="flex gap-4">
                <div className="flex justify-center lg:w-1/2">
                <ItemList items={items} onItemSelect={handleSelectItem} />
                </div>
                <div className="flex justify-center lg:w-1/2">
                <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;
