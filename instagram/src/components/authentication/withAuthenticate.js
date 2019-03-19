import React, { Component } from 'react';


// - First, we need to change our `withAuthenticate` HOC to return a second function that will take in a second component (which will be the `LoginPage`). 
// This will look like a "double arrow" function - `const withAuthenticate = PostsPage => LoginPage => {}`.
//   - In `App.js`, we can now invoke the HOC function twice (which is called currying). The first time it's invoked, pass in `PostsPage`. 
// The second time, pass in `LoginPage` (which you'll need to import here). ie - `export default higherOrderComp(FirstComponent)(SecondComponent)`
//   - Inside of the class component that the inner function in `withAuthenticate` returns, we need to add a constructor to hold our state data.
//   - On state we need a `loggedIn` boolean flag.
//   - In `componentDidMount` we need to check `localStorage` to see if a user is logged in, and setState accordingly.
//   - Inside of the render function we will check `if a user is logged in` from the state boolean flag
//   - If a user is logged in we will return the `<PostsPage />`, else we will return the `<LoginPage>`

const withAuthenticate = App =>
class extends Component {
  render() {
    return <App />;
  }
};

export default withAuthenticate;