import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class Title extends Component {
  static contextTypes = {
    title : PropTypes.string,
    themeColor : PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render(){
    console.log(this.props)
    console.log(this.context)
    const themeColor = this.context.themeColor
    return(
      <h1 style={{color:themeColor}}>
        大标题
      </h1>
    );
  }
}

class Demo extends Component {
  static contextTypes = {
    title : PropTypes.string,
    themeColor : PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render() {
    return(
      <div>
        {this.props.title}
        <Title title={this.props.title}></Title>
      </div>
    );
  }
}

class Button extends Component {
  static contextTypes = {
    title : PropTypes.string,
    themeColor : PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render() {
    const {themeColor, handleChangeThemeColor} = this.context
    return(
      <div>
        <div>
          <button type="button" style={{color:themeColor}} onClick={()=>handleChangeThemeColor('red')}>red</button>
          <button type="button" style={{color:themeColor}} onClick={()=>handleChangeThemeColor('green')}>green</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  static childContextTypes = {
    title : PropTypes.string,
    themeColor : PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  constructor(){
    super()
    this.state = {
      themeColor:'red'
    }
  }
  handleChangeThemeColor(color){
    this.setState({
      themeColor: color
    })
  }
  getChildContext(){
    return {
      title: "大标题",
      themeColor:this.state.themeColor,
      handleChangeThemeColor: (color) => this.handleChangeThemeColor(color)
    }
  }
  render() {
    return (
     <div>
       <Demo></Demo>
       <Title></Title>
       <Button></Button>
     </div>  
    );
  }
}

export default App;
