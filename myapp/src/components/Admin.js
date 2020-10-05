import React, { Component } from 'react';
import { EVENTS_API } from "../constants";

export default class Events extends Component {
  username = localStorage.getItem("username");
    constructor(props) {
        super(props);
       
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          value: this.username,
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

      onChangeHandler(e) {
        console.log(e.target.value);
        let newArray = this.apiEvents.filter((d)=>{
          console.log(d)
            let searchValue = d.name.toLowerCase();
            return searchValue.indexOf(e.target.value) !== -1;
        });
        console.log(newArray)
        this.setState({
            users:newArray
        })
    }
    
      render() {
        const { error, isLoaded, items } = this.state;
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else{
          console.log(this.state.items);
          return (
            <div style={{backgroundColor: "white", color: "black", minHeight: "700px",width: "80%",marginLeft: "10%"}}>
               <h1>Users List</h1>
                    <input type="text" value={this.state.value} placeholder="Search by user name..." 
                    onChange={this.onChangeHandler.bind(this)}/>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Time</th>
                  </tr>
              {items.map(item =>
              (
                <tr key={item.id}>
                <td>{item.user}</td>
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