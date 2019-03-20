import React, { Component } from 'react';

import instagram from './instagram.png';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    login = () => {
        localStorage.setItem(`username`, `${this.state.username}`);
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <img src={instagram} />
                <form onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="Username"/>
                    <input type="password"   name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
                    <p>Forgot password?</p>
                    <button type="submit" >Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
