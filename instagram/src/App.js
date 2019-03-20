import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.scss';

import PostsPage from './components/Posts/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const AuthenticatePage = withAuthenticate(PostsPage)(Login);

class App extends Component {
  state = {
    dummyData : '',
    searchCriteria : '',
    loggedIn : false,
    username : '',
    password : ''
  }

  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.setState({loggedIn : true})
    } else {
      this.setState({loggedIn : false})
    }
    this.setState({dummyData: dummyData});
  }
  login = (e) => {
    if (this.state.username.length > 0 && this.state.username.search(/[^a-zA-Z]+/)) {
      localStorage.setItem(`username`, `${this.state.username}`);
      this.setState({loggedIn : true});
    } else {
      e.preventDefault();
    }
       
 
}

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 

  render() {
   
    return (
      <div className="App">
        <AuthenticatePage {...this.state} login={this.login} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
