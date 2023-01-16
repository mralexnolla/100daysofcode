// step1 we need to import the context 
import React, {Component, createContext} from 'react';

//step 2 Initialize the context

export const ThemeContext = createContext();

//Step 3 Create the provider

class ThemeContextProvider extends Component{
  //we need a state
  // We are try to create a theme that will toggle the text between light and dark theme
  state = {
    isLightTheme : true,
    light: {syntax:'#555', ui:'#ddd', bg:'#eee'}, // so when text is dark ui and bg are light
    dark: {syntax:'#ddd', ui:'#333', bg:'#555'}  // when text is light ui and bg are dark
  }
  render(){
    return(
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider