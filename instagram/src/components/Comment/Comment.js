import React from 'react';
import './_Comment.scss';

const Comment = (props) => {
    return (
        <p className="comment"><span>{props.comment.username}</span> {props.comment.text}
        </p>
    );
}

export default Comment;