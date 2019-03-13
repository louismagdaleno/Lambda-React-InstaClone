import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './_Posts.scss';

const Posts = (props) => {
    return (
        <div className="posts">
            {props.dummyData.map((dummy, index) => <PostContainer data={dummy} key={index}/>)}
        </div>
    );
}

export default Posts;