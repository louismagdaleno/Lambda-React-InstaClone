import React, { Component } from 'react';

import instagram from './instagram.png';
import './Login.scss';

class Login extends Component {
    
    
    

    render() {
        return (
            <div className="login">
                <img src={instagram} />
                <form onSubmit={this.props.login}>
                    <input type="text" name="username" value={this.props.username} onChange={this.props.changeHandler} placeholder="Username"/>
                    <input type="password"   name="password" value={this.props.password} onChange={this.props.changeHandler} placeholder="Password"/>
                    <p>Forgot password?</p>
                    <button type="submit" >Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
