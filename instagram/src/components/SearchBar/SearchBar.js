import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// image imports
import logo from './instagram.png';
import icon from './logo.png';
import heart from './heart.png';
import post from './post.png';
import user from './user.png';

const SearchBarHeader = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: 1px solid silver;
    padding: 0 10px;
    background-color: white;


    .searchBar_logos, .searchBar_icons {
        display: flex;
        flex-direction: row;
    }

    .searchBar_logos > .icon {
        width: auto;
        height: 24px;
    }
    .searchBar_logos > .logo {
        height: 24px;
        width: auto;
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1px solid black;
    }

    .searchBar_logos {
        width: 20%;
        justify-content: space-between;
    }

    .searchBar_icons {
        width: 20%;
        justify-content: space-between;

        img {
            width: auto;
            height: 24px;
        }

    }
        

    input {
        text-align: center;
        width: 30%;
        height: 24px;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 500px) {
        .searchBar_icons {
            width: 30%;

            img:hover {
                cursor: pointer;
            }
        }

        .searchBar_logos {
            width: 30%;
            .logo {
                margin-left: 5px;
                padding-left: 5px;
                
            }

            
        }
    }
`;

const SearchBar = props => {
    return (
        <SearchBarHeader>
            <div className="searchBar_logos">
                <img src={icon} className="icon" alt="Instagram Icon" />
            
                <img src={logo} className="logo" alt="Instagram Logo" />
            </div>

            <input type="text" name='searchCriteria' value={props.text} onChange={ props.changed} placeholder="🔍 Search" />

            <div className="searchBar_icons">
                <img src={post} alt="Write a post" />
                <img src={heart} alt="View photos you've liked" />
                <img src={user} alt="View your profile" />
            </div>
        </SearchBarHeader>
    );
}

SearchBar.propTypes = {
    props: PropTypes.object
}

export default SearchBar;