"use client"
import React, { useEffect, useState } from "react";

export default function MealIdeas ({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
        }
        catch (error)
        {
            console.log("Error fetching meals: ", error);
            return [];
        }
    }

    async function loadMealIdeas(){
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []);
    }
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div className="flex flex-col p-4 m-4 bg-neutral-300 text-black font-semibold max-w-sm w-full rounded">
            <h2 className="flex justify-center bg-yellow-800 px-6 py-2 m-2 rounded font-bold ">Meal Ideas</h2>
            {meals.length === 0 ?( <div className="flex justify-center">No meals found</div> ):
            (meals.map((meal) => (
                <div key={meal.idMeal} className="flex flex-col bg-neutral-300 p-1/2 rounded">
                    <ul className="flex flex-col items-center p-1 bg-neutral-300 text-black border-2 border-transparent border-t-black">{meal.strMeal}</ul >
                </div>
            ))
            )}
        </div>
    );

}




