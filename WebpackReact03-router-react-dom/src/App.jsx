import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import './app.css';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import MyNavLink from './utils/my-nav-link.jsx';

export default class App extends Component {
  render() {
    return(
        <div className='container'>
          <div className='title'>
            <h1>React-router-dom</h1>
          </div>
          <div className='body'>
              <MyNavLink activeClassName='active' to='/about'>About</MyNavLink>
              <MyNavLink activeClassName='active' to='/home'>Home</MyNavLink>
              <div className='content'>
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/home'/>
                </Switch>
              </div>
          </div>
        </div>
    )
  }
}
