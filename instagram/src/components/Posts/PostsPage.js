import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Posts from './Posts';

class PostsPage extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
                <SearchBar text={this.props.searchCriteria} search={this.props.search} changed={this.props.changeHandler} />
                {this.props.dummyData ? <Posts dummyData={this.props.dummyData} search={this.props.searchCriteria} /> : <h2>Loading...</h2>}
            </div>
            
            
        )
    }
}

export default PostsPage;