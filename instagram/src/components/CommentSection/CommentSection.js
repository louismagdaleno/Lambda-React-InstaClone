import React from 'react';
import './CommentSection.scss';
import Comment from '../Comment/Comment';

const CommentSection = (props) => {
    return (
        <div className="comments">
            {props.comments.map(comment => <Comment comment={comment} />)}
        </div>
    );
}

export default CommentSection;