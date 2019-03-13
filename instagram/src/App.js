import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    dummyData: dummyData
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
