import React, { Component } from 'react';
import axios from "axios";
import { EVENTS_API } from "../constants";

export default class Signup extends Component {
   username = localStorage.getItem("username");
    state =  {
        name: this.username, 
        email: "",
        number: "",
        event: "",
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = e => {
        e.preventDefault();
        const { history } =this.props;
        axios.post(EVENTS_API, this.state)
        .then(() => {
            console.log(this.state)
            console.log(this.state)
            this.setState({
                name: this.username, 
                email: "",
                number: "",
                event: "",
            })
            alert(`Hi ${this.state.name}, you have successfully registered for the event`);
            history.push('/events');
        }).catch(function(error) {
            console.log(error);
        })
    }
    render() {
        return (
            // Registration form 
            
            <div className="container"> 
                    <p className="register">Register Now</p>
                        <form onSubmit={this.signUp} >
                        <div className="input-group">
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                <input type="text" name="name" 
                                value={this.state.name} 
                                onChange={this.onChange}
                                placeholder="Your Name" required/>
                                </div>

                            <div className="input-group">
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <input type="email" name="email"
                                value={this.state.email} 
                                onChange={this.onChange}
                                placeholder="Email" required/>
                            </div>

                            <div className="input-group">
                                <input type="text" name="number"
                                value={this.state.number}
                                onChange={this.onChange} 
                                placeholder="Phone Number" required/>
                            </div>

                            <div className="input-group">
                                <select name="event" value={this.state.event} onChange={this.onChange}>
                                    <option>Select Event</option>
                                    <option event="Community Shield Tournament">Community Shield Tournament</option>
                                    <option event="Intro To Django Framework">Intro To Django Framework</option>
                                    <option event="DEV TECH Conference">DEV TECH Conference</option>
                                    <option event="Production Conference">Production Conference</option>
                                    <option event="The Design Conference">The Design Conference</option>
                                    <option event="The Great Movie Premier">The Great Movie Premier</option>
                                </select>

                            </div>
                                <button className="bttn">Register Now</button>
                            
                        </form>
            </div>  
        )
    }
}
