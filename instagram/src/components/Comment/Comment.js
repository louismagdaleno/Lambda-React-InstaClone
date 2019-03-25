import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CommentP = styled.p`
font-weight: 500;
margin-bottom: 10px;
padding: 0 10px;

span {
    font-weight: 700;

}

span:hover {
    cursor: pointer;
}`;

const Comment = (props) => {
    return (
        <CommentP className="comment"><span>{props.comment.username}</span> {props.comment.text}
        </CommentP>
    );
}
Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;