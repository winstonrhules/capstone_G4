import React, { Component } from 'react';
import axios from "axios";
import { USERREG_URL } from "../constants";

export default class Signup extends Component {
    state =  {
        first_name: "",
        last_name: "", 
        username: "",
        email: "",
        password: "",
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = e => {
        e.preventDefault();
        axios.post(USERREG_URL, this.state)
        .then((data) => {
            console.log(this.state);
            console.log(data)
            if (data.status == 200){
            alert(`Successfully registered`);
            }
            this.setState({
                first_name: "",
                last_name: "", 
                username: "",
                email: "",
                password: "",
            })
        })
    }
    render() {
        return (
            // Registration form 
            <div className="container"> 
                    <p className="register">Registration</p>
                        <form onSubmit={this.signUp} >
                        <div className="input-group">
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                <input type="text" name="first_name" 
                                value={this.state.first_name} 
                                onChange={this.onChange}
                                placeholder="First Name *" required/>
                                </div>

                                <div className="input-group">
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                <input type="text" name="last_name" 
                                value={this.state.last_name} 
                                onChange={this.onChange}
                                placeholder="Last Name *" required/>

                            </div>

                            <div className="input-group">
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                 <input type="text" name="username"
                                value={this.state.username} 
                                onChange={this.onChange}
                                placeholder="Username *" required minLength={5}/>

                            </div>

                            <div className="input-group">
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <input type="email" name="email"
                                value={this.state.email} 
                                onChange={this.onChange}
                                placeholder="Email *" required/>
                            </div>

                            <div className="input-group">
                        <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                                <input type="Password" name="password"
                                value={this.state.password}
                                onChange={this.onChange} 
                                placeholder="Password" required minLength={8}/>
                            </div>
                                <button className="bttn">Create Account</button>
                            
                        </form>
            </div>  
        )
    }
}
