import React, {useState} from 'react';

const NewSong = ({addSongs}) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSongs(title);
    setTitle('')
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new songs </label>
        <input type="text" value={title} required onChange={(e) => {setTitle(e.target.value)}}/>
        <input type="submit" value="add songs"/>
      </form>
    </div>
  )
}

export default NewSong;