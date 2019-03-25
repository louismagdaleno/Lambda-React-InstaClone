import React, { Component } from 'react';



const withAuthenticate = AuthenticatedComponent => LoginPage =>
class extends Component {
  render() {
    return (
      <>
        {this.props.loggedIn ? (
          <AuthenticatedComponent {...this.props} />
        ) : (
          <LoginPage {...this.props} />
        )}
      </>
    );
  }
};

export default withAuthenticate;