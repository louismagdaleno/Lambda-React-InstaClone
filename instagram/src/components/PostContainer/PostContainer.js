import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import heart from './heart.png';
import redheart from './redheart.png';
import comment from './comment.png';

const PostContainerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;

    img {
        width: 100%;
        height: auto;
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        padding: 0 10px;
    }

    header > img {
        width: 32px;
        height: auto;
        border-radius: 50%;
        

    }

    header > h3 {
        font-size: 2.2rem;
        margin-left: 10px;
    }

    header > h3:hover {
        cursor: pointer;
    }

    .actions {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;
        padding-left: 15px;
    }

    .actions > img {
        height: 26px;
        width: auto;
        padding-right: 10px;
    }
    .actions > img:hover {
        cursor: pointer;
    }

    .likes {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: flex-start;
        margin-top: 10px;

    }

    .likes > p {
        font-size: 1.8rem;
        padding-left: 15px;
        font-weight: 700;
    }

    input {
        width: 100%;
        max-width: 100%;
        height: 60px;
        margin-top: 10px;
        font-size: 1.6rem;
        border: 0 px solid black;
    }
`;

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes : props.data.likes,
            liked: false
        }
    }

    likePost = () => {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likes: !prevState.liked ? prevState.likes + 1 : prevState.likes - 1
        }))
    }

    render() {
        return (
            <PostContainerDiv>
                <header>
                    <img src={this.props.data.thumbnailUrl} />
                    <h3>{this.props.data.username} </h3>
                </header>
                <img src={this.props.data.imageUrl} />
                <div className="actions">
                    <img src={this.state.liked ? redheart : heart} onClick={this.likePost} />
                    <img src={comment} />
                </div>
                <div className="likes">
                    <p>{this.state.likes} likes </p>
                </div>
                <CommentSection className="commentSection" comments={this.props.data.comments} />
                
            </PostContainerDiv>
        );
    }
    
}

PostContainer.propTypes = {
    data: PropTypes.object
    

}
export default PostContainer;