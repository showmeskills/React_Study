import React,{Component} from 'react';

export default class MessageDetail extends Component {
    state = {
        messageDetail:[
            {id:0,title:'Messages01',content:'I love AU'},
            {id:1,title:'Messages02',content:'I love my parents'},
            {id:2,title:'Messages03',content:'I love my wife'},
            {id:3,title:'Messages04',content:'I love my son'},
        ]
    }


    render(){
        const {id} = this.props.match.params;
        const allMessages = this.state.messageDetail.find(message => message.id === id*1);
        return(
            <ul>
                <li>id:{allMessages.id}</li>
                <li>title:{allMessages.title}</li>
                <li>content:{allMessages.content}</li>
            </ul>
        )
    }
}