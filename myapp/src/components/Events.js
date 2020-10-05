import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { EVENTS_API } from "../constants";

export default class Events extends Component {
  username = localStorage.getItem("username");
    constructor(props) {
        super(props);
       
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          user: this.username,
        };
      }
      apiEvents = [];

      componentDidMount() {
       
        fetch(EVENTS_API)
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result,
                apiEvents: result
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

    //   onChangeHandler(e) {
    //     console.log(e.target.value);
    //     let newArray = this.state.items.filter((d)=>{
    //       console.log(d)
    //         let searchValue = d.name.toLowerCase();
    //         // let searchValue = localStorage.getItem("username");
    //         return searchValue.indexOf(e.target.value) !== -1;
    //     });
    //     console.log(newArray)
    //     this.setState({
    //         items:newArray
    //     })
    // }
    
      render() {
        const { user, isLoaded, items } = this.state;
      
        if (!user) {
          return <div style={{backgroundColor: "white",fontSize: "5rem", color: "black", minHeight: "700px",width: "80%",marginLeft: "10%"}}>Please login to see your orders</div>;
        } else if (!isLoaded) {
          return <div style={{backgroundColor: "white",fontSize: "5rem", color: "black", minHeight: "700px",width: "80%",marginLeft: "10%"}}>Loading...</div>;
        } else{
          console.log(this.state.items);
          return (
            <div style={{backgroundColor: "white", color: "black", minHeight: "700px",width: "80%",marginLeft: "10%"}}>
                    {/* <input type="text" value={this.state.user} placeholder="Search by user name..." 
                    onChange={this.onChangeHandler.bind(this)}/> */}
                    <button className="eventbttn" style={{color: "white"}}>
                    <Link to="/home">Back Home</Link>
                    </button>
                    
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Time</th>
                  </tr>
              {items.map(item =>
              (
                <tr key={item.id}>
                <td>{this.username}</td>
                <td>{item.event}</td>
                <td>{item.time}</td>
              </tr>
              
              )
            )}
            </table>
            </div>
          );
        }
      }
    }