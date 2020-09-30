import UserStore    from '../stores/UserStore';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";
import { LOGIN_URL } from "../constants";

export default class Login extends Component {
    state =  {
        username: "",
        password: "",
    }
// PROPERTY HERE REFERS TO THE 'EMAIL' AND 'PASSWORD'
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    logIn = e => {
        e.preventDefault();
        axios.post(LOGIN_URL, this.state)
        .then((data) => {
            console.log(this.state);
            console.log(data);
            if (data.status == 200){
            alert('Successfully logged in');
            localStorage.setItem("token", data.data.token);
            }else{
                alert('user session expired, please log in again')
            }
            this.setState({
                username: " ",
                password: " ",
            })
        })
    }
    resetForm() {
        this.setState({
            email: '',
            password: '',
            buttonDisabled: false
        })
    }
    // API CALL FOR THE LOGIN BUTTON
    async doLogin() {
        if (!this.state.email){
            return;
        }
        if (!this.state.password){
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {
           
            let res = await fetch('http://127.0.0.1:8000/login/users/', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.email = result.email;
            }

            else if (result && result.success === false) {
                this.resetForm();
                alert (result.msg);
            }
        }

        catch(e) {
            console.log(e);
            this.resetForm();

        }
    }
    render(){  
    // USER INTERFACE FOR THE LOGIN FORM
        return(
            
            <div className="LoginForm">
                <div className='log'> Sign into your account </div >
                <form onSubmit={this.logIn}>
                         {/* THE INPUT FIELD FOR EMAIL ADDRESS */}
                <div className="input-group">
            <span><i className="fa fa-user" aria-hidden="true"></i></span>

                    <input className='InputField'
                        type = 'text'
                        name='username'
                        value = {this.state.username}
                        onChange = {this.onChange}
                        placeholder = 'Username*' required/>
                
                </div>
                {/* THE INPUT FIELD FOR PASSWORD */}
                <div className="input-group">
            <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                    <input className='InputField'
                        type = 'password' 
                        name='password'
                        value = {this.state.password}
                        onChange = {this.onChange}
                        placeholder = 'Password*' required/>
                    
                    </div>
                {/* THE LOG IN BUTTON */}
                <button className="btn">Sign In</button>
                </form>
                    
                {/* THE CODE BELLOW CREATES A HORIZONTAL LINE */}
                    <hr className='line'></hr>
                        
                        <div className= 'sign'>
                            Don't have an account? 
                            <Link to = {'/signup'}> Sign Up!</Link>
                        </div>
            </div>
            
        );
    }
}
