import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './_Posts.scss';
import PropTypes from 'prop-types';

const Posts = props => {
    return (
        <div className="posts">
            {props.dummyData.map((dummy, index) => <PostContainer data={dummy} key={index}/>)}
        </div>
    );
}

Posts.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.object)
}

export default Posts;