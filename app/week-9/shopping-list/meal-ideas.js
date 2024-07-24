"use client";
import React, { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.log("Error fetching meals: ", error);
            return [];
        }
    }

    async function loadMealIdeas() {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="flex flex-col items-center p-4 m-4 bg-neutral-300 text-black font-semibold max-w-sm w-full rounded-lg shadow-lg">
            <h2 className="bg-yellow-800 px-4 py-2 m-2 rounded font-bold text-center text-white text-lg">Meal Ideas</h2>
            {meals.length === 0 ? (
                <div className="flex justify-center text-gray-500">No meals found</div>
            ) : (
                <ul className="w-full">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex justify-center bg-neutral-200 p-2 rounded mb-1 hover:bg-yellow-100 transition duration-200 border-b border-gray-300 last:border-0">
                            <span className="text-center text-gray-700">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
