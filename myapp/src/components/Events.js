import React, { Component } from 'react';
import { EVENTS_API } from "../constants";

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch(EVENTS_API)
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          );
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          console.log(this.state.items);
          return (
            <div style={{backgroundColor: "white", color: "black", height: "700px",width: "80%",marginLeft: "10%"}}>
                <ul>
              {items.map(item => (
                <li key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.event}</p>
                  <p>{item.email}</p>
                  <p>{item.number}</p>
                </li>
              ))}
            </ul>
            </div>
          );
        }
      }
    }