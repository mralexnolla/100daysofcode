import React, {useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid'
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'The rithm of React', id: 1},
        {title: 'I can do it JS my Mind', id: 2},
        {title: 'The Darkness of React', id: 3}
        
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid() }])
    } 

    const incrementer = () => {
        setAge(age + 1 )
    }

    useEffect(() => {
        console.log('useEffect hook ran', songs)
    }, [songs])


    useEffect(() => {
        console.log('useEffect hook ran', age)
    },[age])


    return ( 
        <div className="song-list">
            <ul>
                {
                    songs.map((song) => {
                        return(
                            <li key={song.id}>{song.title}</li>
                        )
                    })
                }
            </ul>

            <h3>Age increases by 1 see : {age}</h3>
            
            <NewSongForm  addSong={addSong}/>

            <button onClick={incrementer}> Increment</button>
            
        </div>
     );
}
 
export default SongList;
