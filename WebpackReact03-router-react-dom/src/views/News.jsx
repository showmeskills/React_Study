import React,{Component} from 'react';

export default class News extends Component {
    state = {
        news:['news001','news002','news002']
    }

    render(){
        const {news} = this.state;
        return(
            <ul>
                {
                    news.map((news,index) =><li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}