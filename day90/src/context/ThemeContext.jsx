// step1 we need to import the context 
import React, {Component, createContext} from 'react';

//step 2 Initialize the context

export const ThemeContext = createContext();

//Step 3 Create the provider

class ThemeContextProvider extends Component{
  //we need all the states in one place 
  // We are try to create a theme that will toggle the text between light and dark theme
  state = {
    isLightTheme : true,  //is light is true so dark state has no effect 
    light: {syntax:'#555', ui:'#ddd', bg:'#eee'}, // so when text is dark ui and bg are light
    dark: {syntax:'#ddd', ui:'#333', bg:'#555'}  // when text is light ui and bg are dark
  }
  toggleTheme = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  }
  render(){
    return(
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children} {/** The children are Navbar and BookList */}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider