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
            const {isLightTheme, light, dark} = themeContex;
            let theme = isLightTheme ? light : dark;
            return(
              <div className="book-list" style={{background: theme.bg, colour: theme.syntax}}>
              <ul>
                <li style={{background: theme.ui}}>How I learnt contex</li>
                <li style={{background: theme.ui}}> Ping pang of context hook</li>
                <li style={{background: theme.ui}}>The grind continues</li>
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