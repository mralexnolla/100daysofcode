import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

//import { createContext } from 'react';

export const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const fetchData =  async (url) => {
        setLoading(true)

        try{
            const { data } = await axios(url);   // i used axios to consume the api
            if(data.meals){
                setMeals(data.meals)
            }else{
                setMeals([])
            }
            
        }catch(e){
            console.log(e.response)
        }

        setLoading(false)

    }

    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal);

        setSelectedMeal(meal);
        setShowModal(true)

    }

    const closeModal = () => {
        setShowModal(false)
    }

    const fetchRandomMeal = () => {
        fetchData(randomMealUrl)
    }

    useEffect(() => {
        fetchData(allMealsUrl)
    },[])
    
    useEffect(( ) => {
        if(!searchTerm)
            return
                fetchData(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    return ( 
        <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal}}>
            {children}
        </AppContext.Provider>
     );
}

// this is a custom hook
export const useGlobalContext = () => {
    return(
       useContext(AppContext)
    )
}
 
export default AppContextProvider;
