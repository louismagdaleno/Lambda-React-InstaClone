import React, { Component } from 'react';

import instagram from './instagram.png';
import styled from 'styled-components';

const LoginDiv = styled.div`
height: 400px;
    max-width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
    border-radius: 15px;
    img {
        width: 40%;
        height: auto;
        @media screen and (max-width: 500px) {
            width: 60%;
        }
    }

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 1.6rem;
        border-radius: 15px;
        -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;
            background-color: white;
        input {
            width: 100%;
            height: 40px;
            text-align: center;
            border-radius: 15px;
            -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;
            border: .5px solid gray;
        }
        input:focus {
            border: .5px solid gray;
        }
        p {
            color: #3897f0;
            margin-top: 20px;
            padding-left: 50%;
        }
        p:hover {
            cursor: pointer;
        }
        button {
            margin-top: 25px;
            font-size: 1.6rem;
            height: 40px;
            width: 100%;
            background-color: #3897f0;
            color: white;
            border-radius: 15px;
            -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
        }
        button:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 500px) {
            width: 80%;
        }
    }`;

class Login extends Component {
    
    
    

    render() {
        return (
            <LoginDiv>
                <img src={instagram} />
                <form onSubmit={this.props.login}>
                    <input type="text" name="username" value={this.props.username} onChange={this.props.changeHandler} placeholder="Username"/>
                    <input type="password"   name="password" value={this.props.password} onChange={this.props.changeHandler} placeholder="Password"/>
                    <p>Forgot password?</p>
                    <button type="submit" >Login</button>
                </form>
            </LoginDiv>
        );
    }
}

export default Login;
