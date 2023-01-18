import React, { createContext, useState } from 'react';
import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Dance with the Context Hook', author: 'Mary Sikado', id: 1},
        {title: 'Don the needfull Grind ', author: 'Tony Monsada', id: 2}
    ])


    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv1()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id ))  //if book.id is not equal to id, then keep that in the array
    }

    return(

        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider;
