import React from 'react';
import './_CommentSection.scss';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return (
        <div className="comments">
            {props.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;