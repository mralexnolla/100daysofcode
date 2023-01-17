import React, {Component, useContext} from 'react';
import { Context } from '../context/Context';

// class Navbar extends Component {
//   render(){
//     return(
//       <Context.Consumer>
//         {
//           (themeContext) => {
//             const {isLight, light, dark} = themeContext;
//             let theme = isLight ? light :  dark;
//             return(
//               <nav className="nav-bar" style={{background: theme.ui, color: theme.syntax}}>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//               </nav>
//             )
//           }
//         }
//       </Context.Consumer>
//     )
//   }
// }

const Navbar = () => {
  const {isLight, light, dark} = useContext(Context)
  let theme = isLight ? light :  dark;
  return(
    <nav className="nav-bar" style={{background: theme.ui, color: theme.syntax}}>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
              </nav>
  )
}

export default Navbar;


//export default Navbar;