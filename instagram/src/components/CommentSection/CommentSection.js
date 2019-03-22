import React, { Component } from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

const CommentsDiv = styled.div`
margin-top: 10px;
margin-bottom: 10px;
text-align: left;
font-size: 1.6rem;`;

const CommentInput = styled.input`
width: 100%;
max-width: 100%;
height: 60px;
margin-top: 10px;
font-size: 1.6rem;
border: 0 px solid black;`;

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
            }],
            text : ''
        }))
    }
    
    render () {
        return (
            <CommentsDiv>
                {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
                <form onSubmit={this.addComment} >
                    <CommentInput type="text" name="text" value={this.state.text} placeholder="   Add a comment..." onChange={this.changeHandler} />
                </form>
            </CommentsDiv>
        );
    }
    
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;