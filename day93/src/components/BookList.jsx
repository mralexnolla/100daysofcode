import React, {Component, useContext} from 'react';
import { Context } from '../context/Context';


// class BookList extends Component {
//   static contextType = Context;
//   render(){
//     const {isLight, light, dark} = this.context;
//     let theme = isLight ? light : dark;
//   return(
//     <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//       <ul style={{background: theme.bg}}>
//         <li style={{background:theme.ui}}>How i understood react</li>
//         <li style={{background:theme.ui}}>The Darkness of Javascrip</li>
//         <li style={{background:theme.ui}}>A day in the life of a CodeTrainee</li>
//         <li style={{background:theme.ui}}>Ping Pang Jahh of React</li>
//       </ul>

//     </div>
//   )
//   }
// }

/**Back to the context hook.
 * i will keep the above as reference and convert tis class component 
 * into functional component using the useContext hook
 * yes that fast and simple #thankU4Ex16
 */

 const BookList = () =>{
  const {isLight, light, dark} = useContext(Context);
  let theme = isLight ? light : dark;
   return(
    <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
    <ul style={{background: theme.bg}}>
      <li style={{background:theme.ui}}>How i understood react</li>
      <li style={{background:theme.ui}}>The Darkness of Javascrip</li>
      <li style={{background:theme.ui}}>A day in the life of a CodeTrainee</li>
      <li style={{background:theme.ui}}>Ping Pang Jahh of React</li>
    </ul>

  </div>
   )
 }

 export default BookList;




//export default BookList;