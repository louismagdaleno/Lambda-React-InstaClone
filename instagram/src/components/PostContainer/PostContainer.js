import React, { Component } from 'react';
import './_PostContainer.scss';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import heart from './heart.png';
import redheart from './redheart.png';
import comment from './comment.png';

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
            <div className="postContainer">
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
                
            </div>
        );
    }
    
}

PostContainer.propTypes = {
    data: PropTypes.object
    

}
export default PostContainer;