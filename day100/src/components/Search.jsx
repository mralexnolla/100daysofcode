import React, {useState} from 'react'
import { useGlobalContext } from '../AppContext';

const Search = () => {
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
    const [text, setText] = useState("");
    
    const handleChange = (e) => {
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            setSearchTerm(text);
        }
        //setText("")

    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }
   
    return ( 
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Type favorite meal' value = {text} className='form-input' onChange={handleChange}/>
                <button type="submit" className="btn"> Search </button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}> suprise me! </button>
            </form>
        </header>
    );
}
 
export default Search;