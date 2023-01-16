import React, { Component} from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ToggleTheme extends Component{
  static contextType = ThemeContext;
  render(){
    const {toggleTheme} = this.context;
    return(
      <button onClick={toggleTheme}>Toogle the Theme</button>
    )
  }
}

export default ToggleTheme;