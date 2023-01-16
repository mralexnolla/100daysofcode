import React, {useState} from 'react';
import {v1 as uuid} from 'uuid';
import NewSong from './NewSong';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: "My odd songs", id: 1}
  ])

  const addSongs = (title) => {
    setSongs([...songs, {title, id: uuid()}])
    // setSongs([...songs, {title: "This is a great song", id: uuid()}])
  }
  return(
    <div className="song-lis">
      <ul>
        
        {
          songs.map((song) => {
            return(
              <li key={song.id}>{song.title}</li>
            )
          })
        }
      </ul>

        {/* <button onClick={addSongs}>Add songs</button> */}
      
      
      <NewSong addSongs={addSongs}/> 
    </div>
  )
}

export default SongList;