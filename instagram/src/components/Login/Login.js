import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    login = () => {
        
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="Username"/>
                <input type="password"   name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
                <button type="submit" >Submit</button>
            </form>
        );
    }
}

export default Login;
