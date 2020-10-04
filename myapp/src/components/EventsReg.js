import React, { Component } from 'react';
import axios from "axios";
import { BOOK_EVENT } from "../constants";

export default class Signup extends Component {
   username = localStorage.getItem("username");
    state =  {
        user: this.username, 
        // number: "",
        time: "",
        event: "",
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = e => {
        e.preventDefault();
        const { history } =this.props;
        axios.post(BOOK_EVENT, this.state)
        .then(() => {
            console.log(this.state)
            console.log(this.state)
            this.setState({
                user: this.username, 
                // number: "",
                time: [""],
                event: [''],
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
                                <input type="text" name="user" 
                                value={this.state.user} 
                                onChange={this.onChange}
                                placeholder="Your Name" required/>
                        </div>
                        {/* <div className="input-group">
                                <input type="text" name="number" 
                                value={this.state.number} 
                                onChange={this.onChange}
                                placeholder="Your Active Number" required/>
                        </div> */}

                                <div className="input-group">
                                <select name="time" value={this.state.time} onChange={this.onChange}>
                                    <option>Select Time</option>
                                    <option time="Morning">Morning</option>
                                    <option time="Midmorning">Midmorning</option>
                                    <option time="Afternoon">Afternoon</option>
                                </select>

                            </div>

                            

                            <div className="input-group">
                                <select name="event" value={this.state.event} onChange={this.onChange}>
                                    <option>Select Event</option>
                                    <option event="Community Shield Tournament">Community Shield Tournament</option>
                                    <option event="Intro To Django Framework">Intro To Django Framework</option>
                                    <option event="DEV TECH Conference">DEV TECH Conference</option>
                                    <option event="Production Conference">Production Conference</option>
                                    <option event="The Design Confence">The Design Conference</option>
                                    <option event="The Great Movie">The Great Movie Premier</option>
                                </select>

                            </div>
                                <button className="bttn">Register Event</button>
                            
                        </form>
            </div>  
        )
    }
}
