import React, {useState} from 'react';

export function AddThoughtForm(props) {
  const [text,setText] = useState('')
  const handleTextChange = ({target})=>{
    const {value} = target
    setText(value)
  }
  const handleSubmit = ()=>{
    event.preventDefault();
    props.addThought(text)
    setText('')
  }
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value = {text}
        onChange = {handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
