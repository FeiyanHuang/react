import React, { Component } from 'react';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import './demo.css'

var images = [image1, image2, image3]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      index : 0
    }
  }

  _goNext(){
    var {index} =  this.state
    if(index=== 0){
      index = images.length-1
    } else {
      index--
    }
    this.setState({
      index : index
    })
  }
  _goPreve(){
    var {index} =  this.state
    if(index===images.length-1){
      index = 0
    } else {
      index++
    }
    this.setState({
      index : index
    })
  }
  render() {
    var {index} = this.state
    return (
      <div className="wrap">
        <ul className="list">
          {
            // 1、map key diff
            // 2、括号
            // images.map((item, i) => {
            //   return (
            //     <li className="item" key={i}><img src={item} alt=""/></li>
            //   ) 
            // })
            images.map((item, i) => (
              <li className={`item ${index === i ? 'active' : ''}`} key={i}><img src={item} alt=""/></li>
            ))
          }
        </ul>
        <button className="btn left" onClick={()=>this._goNext()}>&lt;</button>
        <button className="btn right" onClick={()=>this._goPreve()}>&gt;</button>
      </div>
    );
  }
}

export default App;
