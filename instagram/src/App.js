import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import PostsPage from './components/Posts/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

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
    const Page = (props) => <PostsPage {...this.state} changeHandler={this.changeHandler} search={this.search} />;
    const ComponentFromWithAuthenticate = withAuthenticate(Page);
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
        
      </div>
    );
  }
}

export default App;
