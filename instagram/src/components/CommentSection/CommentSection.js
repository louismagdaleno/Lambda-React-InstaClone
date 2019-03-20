import React, { Component } from 'react';
import './_CommentSection.scss';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments : props.comments,
            text : '',
            currentUser : ''
        }
    }
    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }
    addComment = event => {
        event.preventDefault();
        this.setState(prevState => ({
            comments: [...prevState.comments, {
                username: localStorage.getItem('username'),
                text: this.state.text
            }]
        }))
    }
    
    render () {
        return (
            <div className="comments">
                {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
                <form onSubmit={this.addComment} >
                    <input type="text" name="text" value={this.state.text} placeholder="   Add a comment..." onChange={this.changeHandler} />
                </form>
            </div>
        );
    }
    
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;