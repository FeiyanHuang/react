import React, { Component } from 'react'

export default class Demo extends Component{
    constructor (props) {
        super(props)
        this.state = {}
    }

    static getDerivedStateFromProps(nextProps, prevState){
        // 函数返回结果将会被添加到state添加到/更新state得内容
        // null state 不需要任何改变
        console.log('静态生命周期函数')
        return null
    }
    render(){
        return(
            <div>Demo</div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentDidUpdate')
    }
}