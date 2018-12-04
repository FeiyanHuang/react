import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import add, {jian} from './add'
import Button from './Button'
import Input from './Input'

// console.log(add(1,2))
// console.log(jian(1,2))

// var Animal = function() {
//   this.type = 'animal'
// }

// var Humen = function (height) {
//   this.height = height
// }

// Humen.prototype = new Animal()

// console.log(new Humen(160))

// class Animal{
//   constructor(){
//     this.type = 'animal'
//   }
// }

// class Humen extends Animal {
//   constructor(height){
//     super()
//     this.height = height
//   }
// }

// console.log(
//   new Humen(190)
// )

class Nav extends Component {
  //点赞那按钮
  constructor(){
    super()
  }
  render(){
    return(
      <div style={{color:"white",backgroundColor:"black"}}>
        Skipper
      </div>
    )
  }
}

// const Button = function(){
//   return(
//     <button>来自Button组件</button>
//   )
// }

class App extends Component {
  //点赞那按钮
  constructor(){
    super()

    this.state = {
      like : false
    }
  }

  // handleClick(){
  //   this.setState(
  //     {
  //       like: !this.state.like
  //     }
  //   )
  // }
  render(){
    return(
      <div>
        <Input></Input>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <Nav></Nav>
  //       <Button></Button>
  //       <button type="button" style={this.state.like?{color:"red"}:{color:"black"}}
  //         onClick={()=>this.handleClick()}
  //       >
  //       {
  //         this.state.like?"已赞":"喜欢"
  //       }
  //       </button>
  //       {/* <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //       <h1>
  //         Hello world
  //       </h1> */}
  //     </div>
  //   );
  // }
}

export default App;
