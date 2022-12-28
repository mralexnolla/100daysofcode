// #thanU4Ex16
// This video is to show you why its important to remove and effect after adding it in React js . 
// we will simulate by increasing the number of likes by counting the number of clicks

// The Grind Continues

import React, {useState, useEffect} from 'react';

export default function Counter() {
  // now lets add our state
  const [clickCount, setClickCount] = useState(0);

  //now let use a function to store and increment the clicks/ likes
  const increment = () => {
    setClickCount((prev) => prev + 1)
  }

  // now lets use the useEffect Hook to add the event listener in that will call the function
  useEffect(()=>{
    document.addEventListener('mousedown', increment);
    return () => {
      document.removeEventListener('mousedown', increment);
    }
     // as soon as the event is added, it is removed when the DOM updates
  })

  // this does not look like incrementing by 1 as i expected it  63 + 64 = 127 etc 
  // the reason is the the effect is added on the previous effect at every render. 
 

  return (
    <h1>Likes: {clickCount}</h1>
  );

}