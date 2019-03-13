import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

class App extends Component {
  state = {
    dummyData: dummyData
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
