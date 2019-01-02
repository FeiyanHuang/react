import React, { Component } from 'react'

export default class Text extends Component {
    constructor (props) {
        super(props)
        console.log('constructor')
        this.state = {
            time : new Date()
        }
    }

    tick () {
        this.setState({
            time : new Date() 
        })
    }

    // 以下是加载
    componentWillMount () {
        console.log('组件将要加载componentWillMount')
        this.timeId = setInterval(()=>this.tick(), 1000)
    }
    componentDidMount () {
        console.log('组件已经加载componentDidMount')
    }
    // 以下是更新
    componentWillReceiveProps () {
        console.log('组件将要接受参数 componentWillReceiveProps')
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log('组件是否应该更新 shouldComponentUpdate')
        // console.log(nextState)
        if (nextState.time.getSeconds() % 2 === 0) {
            return true
        }
        return false
    }
    componentWillUpdate () {
        console.log('组件将要更新 componentWillUpdate')
    }
    // getSnapshotBeforeUpdate () {
    //     console.log('在更新前获取截图 getSnapshotBeforeUpdate')
    // }
    componentDidUpdate () {
        console.log('组件更新完毕componentDidUpdate')
    }
    // 卸载
    componentWillUnmount() {
        console.log('组建将要卸载 componentWillUnmount')
        clearInterval(this.timeId)
    }

    render(){
        console.log('render')
        return(
            <div style={{border : "solid black 1px"}}>
            <p>Test</p>
            <p>{ this.state.time.getSeconds() }</p>
            <button type="button" onClick={()=>this.setState({})}>setState更新</button>
            <button type="button" onClick={()=>this.forceUpdate()}>forceUpdate更新</button>
            </div>
        )
    }   
}
