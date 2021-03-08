import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import News from './News.jsx';
import Messages from './Messages.jsx';
import MyNavLink from '../utils/my-nav-link.jsx';
export default class Home extends Component {
    render(){
        return(
            <div className="Home">
                <MyNavLink to='/home/news' activeClassName='active'>News</MyNavLink>
                <MyNavLink to='/home/messages' activeClassName='active'>Messages</MyNavLink>
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/messages' component={Messages}/>
                    <Redirect to='/home/news' />
                </Switch>
            </div>
        )
    }
}