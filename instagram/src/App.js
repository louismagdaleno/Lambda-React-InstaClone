import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import PostsPage from './components/Posts/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';

class App extends Component {
  state = {
    dummyData : '',
    searchCriteria : '',
    loggedIn : false
  }

  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.setState({loggedIn : true})
    } else {
      this.setState({loggedIn : false})
    }
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
        {this.state.loggedIn ? <ComponentFromWithAuthenticate /> : <Login />}
      </div>
    );
  }
}

export default App;
