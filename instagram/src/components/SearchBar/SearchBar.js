import React from 'react';
import PropTypes from 'prop-types';
import './_SearchBar.scss';

// image imports
import logo from './instagram.png';
import icon from './logo.png';
import heart from './heart.png';
import post from './post.png';
import user from './user.png';

const SearchBar = props => {
    return (
        <header className="searchBar">
            <div className="searchBar_logos">
                <img src={icon} className="icon" alt="Instagram Icon" />
            
                <img src={logo} className="logo" alt="Instagram Logo" />
            </div>

            <input type="text" placeholder="🔍 Search" />

            <div className="searchBar_icons">
                <img src={post} alt="Write a post" />
                <img src={heart} alt="View photos you've liked" />
                <img src={user} alt="View your profile" />
            </div>
        </header>
    );
}

SearchBar.propTypes = {
    props: PropTypes.object
}

export default SearchBar;