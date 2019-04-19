import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import App from './old/App';
import Page1 from './new/page1';
import Page2 from './new/page2'
import Login from './login';

const routers=(
    <BrowserRouter>
        <Route path="/" component={App} exact></Route>
        <Route path='/page1' component={Page1}></Route>
        <Route path='/page2/:id' component={Page2}></Route>
        <Route path='/login' component={Login}></Route>
    </BrowserRouter>
)
export default routers