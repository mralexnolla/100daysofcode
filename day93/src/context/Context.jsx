import React, {Component, createContext} from 'react';

export const Context = createContext();

class ContextProvider extends Component{
  state={
    isLight: true,
    light: {syntax:'#555', ui:'#ddd', bg:'#eee'},
    dark: {syntax:'#ddd', ui:'#333', bg:'#555'}
  }

  toggleAm = () => {
    this.setState({isLight: !this.state.isLight})
  }

  render(){
    return(
        <Context.Provider value={{...this.state, toggleAm: this.toggleAm}}>
          {this.props.children}
        </Context.Provider>
    )
  }
}

export default ContextProvider;