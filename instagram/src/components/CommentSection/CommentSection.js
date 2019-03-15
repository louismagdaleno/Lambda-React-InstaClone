import React, { Component } from 'react';
import './_CommentSection.scss';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments : props.comments
        }
    }
    render () {
        return (
            <div className="comments">
                {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
            </div>
        );
    }
    
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;