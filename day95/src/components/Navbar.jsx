import React, { useContext} from 'react'
import { BookContext } from '../contexts/BookContext';


const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <nav className="navbar">
            <h1>Codetrain Reading list </h1>
            <p>Currently you have {books.length} {books.length > 1 ? "books" : "book"} to get through...</p>
        </nav>
        
     );
}
 
export default Navbar;