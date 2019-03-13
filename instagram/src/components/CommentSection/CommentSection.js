import React from 'react';
import './_CommentSection.scss';
import Comment from '../Comment/Comment';

const CommentSection = (props) => {
    return (
        <div className="comments">
            {props.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
        </div>
    );
}

export default CommentSection;