import React, { Component } from 'react';
import CommentItem from '../comment-item/commentItem.jsx';
import PropTypes from 'prop-types';
import './commentList.css';
export default class CommentList extends Component {
    static propTypes = {
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired,
    }
    render() {
        const {comments,deleteComment} = this.props;
        const display = comments.length === 0? 'block' :'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">feedback：</h3>
                <h2 style={{display}}>there are nothing comments, please add a new comments</h2>
                <ul className="list-group">
                   {
                       comments.map((comments,index)=><CommentItem key={index} comments={comments} deleteComment={deleteComment} index={index}/>)
                   }
                </ul>
            </div>
        )
    }
}