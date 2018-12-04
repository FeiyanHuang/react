import React,{Component} from 'react'

export default class Input extends Component{
    constructor(){
        super()
        this.state = {
            value: ""
        }
    }
    handleInput(e) {
        if(e.target.value.length > 10){
            return
        }
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
        // console.log(e.target.value)
        //console.log(e.nativeEvent)
    }
    render(){
        return(
            <input type="text" onInput={(e)=>this.handleInput(e)} value={this.state.value}/>
        )
    }
}