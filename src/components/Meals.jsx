import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";
import Error from "./Error";

const requestConfig = {}; //must be defined like this or it gives an error

export default function Meals() {
    const { 
        data: loadedMeals, 
        isLoading, 
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []); //passing an empty object and array as config and initialData to the custom hook
    
    if(isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if(error) {
        return <Error title="Failed to fetch meals" message={error} />
    }

    // if(!data) {
    //     return <p>No meals found.</p>
    // }

    return (
        <ul id="meals">
            {loadedMeals.map(meal => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}