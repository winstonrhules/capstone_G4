import React, { Component } from 'react';
import axios from "axios";
import { EVENT_LIST } from "../constants";
import { BOOK_EVENT } from "../constants";

export default class Signup extends Component {
    username = localStorage.getItem("username");
    constructor(props) {
        super(props);
       
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          validationError: "",
          name: this.username,
          user: this.username, 
          time: "",
          event: "",
        };
      }
      
      componentDidMount() {
       
        fetch(EVENT_LIST)
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result,
              });
              console.log(result)
            },
            error => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          );
      }
    

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = e => {
        e.preventDefault();
        const { history } =this.props;
        const body = {
            user: null,
            time: this.state.time,
            event: this.state.event
        }
        axios.post(BOOK_EVENT, body)
        .then(() => {
            console.log(this.state)
            console.log(this.state)
            this.setState({
                user: this.username, 
                // number: "",
                time: '',
                event: '',
            })
            alert(`Hi ${this.state.name}, you have successfully registered for the event`);
            history.push('/events');
        }).catch(function(error) {
            alert('Sorry, no seat left')
        })
    }

    
    render() {
        const { error, isLoaded, items } = this.state;
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
                                <select name="event" value={this.state.event} 
                                onChange={e =>
                                    this.setState({
                                      event: e.target.value,
                                      validationError:
                                        e.target.value === ""
                                          ? "You must select an event"
                                          : ""
                                    })
                                  }
                                >
                                <option>Select an event</option>
                                {this.state.items.map((item) => 
                                <option key={item.id} value={item.id}>{item.topic}</option>)}
                                </select>
                                <div
                                    style={{
                                        color: "red",
                                        marginTop: "5px"
                                    }}
                                    >
                                    {this.state.validationError}
                                    </div>
                            </div>
                                <button className="bttn">Register Event</button>
                            
                        </form>
            </div>  
        )
    }
}
