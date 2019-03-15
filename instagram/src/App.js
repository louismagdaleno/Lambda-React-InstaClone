import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

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
        <SearchBar text={this.state.searchCriteria} search={this.search} changed={this.changeHandler} />
        {this.state.dummyData ? <Posts dummyData={this.state.dummyData} search={this.state.searchCriteria} /> : <h2>Loading...</h2>}
        
      </div>
    );
  }
}

export default App;
