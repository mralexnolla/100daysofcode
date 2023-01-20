import React, {useContext, useEffect} from 'react';

//import { createContext } from 'react';

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
     
    const fetchData = async () => {
        try{
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(( ) => {
        fetchData()
    }, [])

    return ( 
        <AppContext.Provider value={{name:'Lex', role:'Developer'}}>
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
