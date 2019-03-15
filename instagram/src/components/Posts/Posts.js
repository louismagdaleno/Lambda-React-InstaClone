import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './_Posts.scss';
import PropTypes from 'prop-types';

// Search Feature
// Check if length of search str is greater than 0
// If so, then filter the dummyData and check if the search criteria matches the same characters in the username
// If the resulting filtered array has a length greater than 0, some results were found so display those results
// If the resulting filtered array has a length of 0, no results were found so display that
// If the search criteria's length is 0, we aren't searching for anything so just display all posts
const Posts = props => {
    return (
        <div className="posts">
            {props.search.length > 0 
            ? props.dummyData.filter(dummy => dummy.username.slice(0, props.search.length).toLowerCase() === props.search.toLowerCase()).length > 0 
                ? props.dummyData.filter(dummy => dummy.username.slice(0, props.search.length).toLowerCase() === props.search.toLowerCase()).map((dummy, index) => <PostContainer data={dummy} key={index}/>) 
                : <h2>No Results Found</h2>
            : props.dummyData.map((dummy, index) => <PostContainer data={dummy} key={index}/>)}
        </div>
    );
}

Posts.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.object)
}

export default Posts;