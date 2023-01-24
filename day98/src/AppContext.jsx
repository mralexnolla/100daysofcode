import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

//import { createContext } from 'react';

export const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
//const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppContextProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false) 

    //as a matter of fact i will add a loading functionality 
    // now when evere the image re renders, it will show a message saying the page is loading #thanU4Ex16

    const fetchData =  async (url) => {
        setLoading(true)

        try{
            const { data } = await axios(url);   // i used axios to consume the api
            setMeals(data.meals)
        }catch(e){
            console.log(e.response)
        }

        setLoading(false)

    }
    
    useEffect(( ) => {
        fetchData(allMealsUrl)
    }, [])

    return ( 
        <AppContext.Provider value={{loading, meals}}>
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
