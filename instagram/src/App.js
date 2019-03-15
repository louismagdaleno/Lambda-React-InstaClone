import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

class App extends Component {
  state = {
    dummyData : ''
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData ? <Posts dummyData={this.state.dummyData} /> : <h2>Loading...</h2>}
        
      </div>
    );
  }
}

export default App;
