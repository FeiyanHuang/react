import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Button extends Component {
  // constructor(props){
  //   super(props)
  //   // this.state =  {
  //   //   themeColor: ''
  //   // }
  // }

  // handleClick (color) {
  //   console.log(color)
  //   this.setState({
  //     themeColor: color
  //   })
  // }

  render () {
    var themeColor = this.props.themeColor
    return (
      <div >
        <button style={{color : themeColor}} onClick={()=>this.props.handleClick('red')}>红色</button>
        <button style={{color : themeColor}} onClick={()=>this.props.handleClick('green')}>绿色</button>
      </div>
    )
  }
}

class Title extends Component {
  // constructor (props) {
  //   super(props)
  //   // this.state = {
  //   //   themeColor: ''
  //   // }
  // }
  render () {
    const themeColor = this.props.themeColor
    return (
      <div>
        <h2 style = {{color:themeColor}}>标题</h2>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      themeColor: 'red'
    }
  }
  handleClick(color){
    console.log(color)
    this.setState({
      themeColor:color
    })
  }
  render() {
    return (
      <div>
        <h5>App</h5>
        <Title themeColor = {this.state.themeColor}></Title>
        <Button themeColor = {this.state.themeColor} handleClick={(color)=>this.handleClick(color)}></Button>
      </div>
    );
  }
}

export default App;
