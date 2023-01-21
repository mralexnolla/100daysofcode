import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

//import { createContext } from 'react';

export const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppContextProvider = ({children}) => {
    const [meals, setMeals] = useState([]);

    const fetchData =  async (url) => {
        try{
            const { data } = await axios(url);
            setMeals(data.meals)
        }catch(e){
            console.log(e.response)
        }
    }
    
    useEffect(( ) => {
        fetchData(allMealsUrl)
    }, [])

    return ( 
        <AppContext.Provider value={{meals}}>
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
