import React,{Component} from 'react';
import {Route} from 'react-router-dom'


import MyNavLink from '../utils/my-nav-link.jsx';
import MessageDetail from './Message-detail.jsx';
export default class Messages extends Component {
    state = {
        messages:[],
    }
    componentDidMount(){
        setTimeout(() =>{
            const messages = [
                {id:0,title:'Messages01'},
                {id:1,title:'Messages02'},
                {id:2,title:'Messages03'},
                {id:3,title:'Messages04'},
            ];
            this.setState({
                messages
            })
        },1000)
    }
    routePush=(id)=>{
        this.props.history.push(`/home/messages/messages-detail/${id}`)
    }
    routeReplace=(id)=>{
        this.props.history.replace(`/home/messages/messages-detail/${id}`)
    }

    render() {
        const {messages} = this.state;
        return (
            <div className='messages'>
                <ul>
                    {
                        messages.map(
                            (message) =>
                        <li key={message.id}>
                            <MyNavLink to={`/home/messages/messages-detail/${message.id}`}>message.title</MyNavLink>
                            &nbsp;&nbsp;<button onClick={()=>this.routePush(message.id)}>push check</button>
                            &nbsp;&nbsp;<button onClick={()=>this.routeReplace(message.id)}>replace check</button>
                        </li>
                        )
                    }
                </ul>
                &nbsp;&nbsp;<button onClick={()=>this.props.history.goBack()}>goBack</button>
                &nbsp;&nbsp;<button onClick={()=>this.props.history.goForward()}>goForward</button>
                <Route path="/home/messages/messages-detail/:id" component={MessageDetail}/>
            </div>
        )
    }
}