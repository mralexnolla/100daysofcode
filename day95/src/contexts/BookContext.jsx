import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localdata = localStorage.getItem('mybooks');
        return localdata ? JSON.parse(localdata) : [];
    });

    useEffect(() => {
        localStorage.setItem('mybooks', JSON.stringify(books))
    }, [books])

    return(

        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider;
