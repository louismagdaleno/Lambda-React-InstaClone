import React from 'react';
import './PostContainer.scss';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection/CommentSection';
import heart from './heart.png';
import comment from './comment.png';

const PostContainer = (props) => {
    return (
        <div className="postContainer">
            <header>
                <img src={props.data.thumbnailUrl} />
                <h3>{props.data.username} </h3>
            </header>
            <img src={props.data.imageUrl} />
            <div className="actions">
                <img src={heart} />
                <img src={comment} />
            </div>
            <div className="likes">
                <p>{props.data.likes} likes </p>
            </div>
            <CommentSection className="commentSection" comments={props.data.comments} />
            <input type="text" name="addComment" placeholder="   Add a comment..." />
        </div>
    );
}

export default PostContainer;