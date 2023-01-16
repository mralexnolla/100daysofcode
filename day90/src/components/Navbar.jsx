import React, { Component} from 'react';
import { ThemeContext } from '../context/ThemeContext';

// consuming the context methiod 1

class Navbar extends Component{ 
  static contextType = ThemeContext;  //Using the contextType hook
  render(){
    // we will have to do some destructuring here to use to make teh state available
    const {isLightTheme, light, dark} = this.context;
    let theme = isLightTheme ? light : dark; // We will use this to toggle between light and dark theme
    return(
      <nav style={{background: theme.ui, color: theme.syntax}}> 
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;