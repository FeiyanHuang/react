import React from 'react'

export default class Page2 extends React.Component{
    render(){
        return (
            <div>
                <h2>这是我的第二个函数组件</h2>
                <h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
}