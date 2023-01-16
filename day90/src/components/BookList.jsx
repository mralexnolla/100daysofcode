import React, { Component} from 'react';
import { ThemeContext } from '../context/ThemeContext';

//consuming the context method 2

class BookList extends Component{
  render(){
    return(
      <ThemeContext.Consumer>
        {  
          // this takes a call back function 
          (themeContex) => {
            const {isLightTheme, light, dark} = themeContex;  //destructuring 
            let theme = isLightTheme ? light : dark;  // we will use this to toggle between light and dark theme
            return(
              <div className="book-list" style={{background: theme.bg, colour: theme.ui}}>
              <ul>
                <li style={{background: theme.syntax}}>How I learnt contex</li>
                <li style={{background: theme.syntax}}> Ping pang of context hook</li>
                <li style={{background: theme.syntax}}>The grind continues</li>
              </ul>
            </div>
            )
          }
        }
      </ThemeContext.Consumer>
      
    )
  }
}

export default BookList;