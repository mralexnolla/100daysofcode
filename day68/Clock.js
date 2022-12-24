import React from 'react';
import ReactDOM from 'react-dom';

//#thankU4Ex16 The grind Continues

//creating a dynamic clock using react component life cycle componentDidMoun

//Lets start with the class

class Clock extends React.Component {
  //constructor
  constructor(props){
    super(props);
    //here i create the time state
    this.state = {date: new Date()}
  }
  //render
  render(){
    return(
      <div>
          {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
  // i get the current time bur its not dynamic since i have to refresh the page to update the time 
  //ok now let make it update by itself evert 1 second
  //componentDidMount 
  componentDidMount(){
    // best proctice. Its better to use a variable
    const counter = 5000;
    setInterval(()=>{
      this.setState({date: new Date()})
    },counter)
  }
}

//Thanks 

ReactDOM.render(<Clock />, document.getElementById('app'));
