import React,{Component} from 'react';
import PropTypes from'prop-types';
import {connect} from 'react-redux';
import {addComment,deleteComment,getComments} from '../redux/actions'

import CommentAdd from '../components/comment-add/commentAdd';
import CommentList from '../components/comment-list/commentList';

class App extends Component {
   static propTypes = {
       comments: PropTypes.array.isRequired,
       addComment: PropTypes.func.isRequired,
       deleteComment: PropTypes.func.isRequired,
       getComments:PropTypes.func.isRequired,
   }
   componentDidMount(){
       this.props.getComments()
   }
    render(){
        const {comments,deleteComment,addComment} = this.props;
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
                <CommentAdd addComment={addComment}/>
                <CommentList comments={comments} deleteComment={deleteComment}/>
            </div>
          </div>
        )
    }
}
export default connect(
    state=>({comments:state.comments}),
    {
        addComment,
        deleteComment,
        getComments
    }
)(App);
