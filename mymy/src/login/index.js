import React from 'react'

export default class Login extends React.Component{
    render(){
        return (
            <div>
                <h2>login</h2>
                <div>
                    <span>用户名</span>
                    <input></input>
                </div>
                <div>
                    <span>密码</span>
                    <input></input>
                </div>
                <button>登入</button>
            </div>
        )
    }
}