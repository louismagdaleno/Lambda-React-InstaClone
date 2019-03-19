import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import PostsPage from './components/Posts/PostsPage';

class App extends Component {
  state = {
    dummyData : '',
    searchCriteria : ''
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  search = (event) => {

  }

  render() {
    return (
      <div className="App">
        <PostsPage dummyData={this.state.dummyData} searchCriteria={this.state.searchCriteria} changeHandler={this.changeHandler} search={this.search} />
        
      </div>
    );
  }
}

export default App;
