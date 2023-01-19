import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder='Book Title '  value={title} onChange={(e) => {setTitle(e.target.value)} } />
            <input type="text" required placeholder='Book Author '  value={author} onChange={(e) => {setAuthor(e.target.value)} } />
            <input type="submit" value="add book" />
        </form>
    );
}
 
export default NewBookForm;