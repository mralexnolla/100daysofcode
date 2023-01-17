import React , {Component} from 'react';
import { Context } from '../context/Context';


class ToggleTheme extends Component{
  static contextType = Context;
  render(){
    const {toggleAm} = this.context;
    return(
      <button onClick={toggleAm}> Toggle me</button>
    )
  }
}

export default ToggleTheme;