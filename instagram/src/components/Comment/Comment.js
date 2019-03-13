import React from 'react';
import './Comment.scss';

const Comment = (props) => {
    return (
        <p className="comment"><span>{props.username}</span> {props.text}
        </p>
    );
}

export default Comment;