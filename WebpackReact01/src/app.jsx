import React,{Component} from 'react';

import CommentAdd from './components/comment-add/commentAdd';
import CommentList from './components/comment-list/commentList';

export default class App extends Component {
    state={
        comments:[
            {username:'Tom',content:'React is very good'},
            {username:'Jack',content:'React is so easy'},
        ]
    };
    addComment=(comment)=>{
        const {comments} = this.state;
        if(!comment.username || !comment.content){
            alert('username or content can\'t be empty');
        }else{
            comments.unshift(comment);
            this.setState({
                comments
            })
        }
    }
    deleteComment = (index)=>{
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({
            comments
        })
    }
    render(){
        const {comments} = this.state;
        return(
            <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>Please,Release comment for React</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={comments} deleteComment={this.deleteComment}/>
            </div>
          </div>
        )
    }
}