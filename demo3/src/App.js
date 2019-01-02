import React, { Component } from 'react';
import './App.css';
import Test from './Test';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRenderTest : true
    }
  }
  render() {
    return (
      <div>
        { this.state.isRenderTest ?  <Test></Test> : '不渲染'} 
        {/* <Test></Test> */}
        <p>App</p>
        <button type="button" onClick={()=>this.setState({})}>app setState更新</button>
        <button type="button" 
          onClick={()=> 
            this.setState({
              isRenderTest: !this.state.isRenderTest
            })
          }>
          切换test渲染
        </button>
      </div>
      );
  }
}

export default App;
