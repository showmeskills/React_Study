import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './commentItem.css';
export default class commentItem extends Component {
    static propTypes = {
        comments:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    handleDelete =()=>{
        const {deleteComment,index,comments} = this.props;
        if(window.confirm(`are you sure to delete ${comments.username}?`)){
            deleteComment(index);
        }
    }
    render() {
        const { comments } = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <div onClick={this.handleDelete}>delete</div>
                </div>
                <p className="user"><span >{comments.username}</span><span>说:</span></p>
                <p className="centence">{comments.content}</p>
            </li>
        )
    }
}