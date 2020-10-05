import React, { Component } from 'react';
import { EVENT_LIST } from "../constants";
import { Link } from 'react-router-dom';
import './Home.css' ;
import '../App.css';

export default class Home extends Component {
  username = localStorage.getItem("username");
  constructor(props) {
    super(props);
   
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      name: this.username,
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

 

    render() {
      const { error, isLoaded, items } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else{
        console.log(this.state.items);
        return (
        
        <div>
<div class="wrapper row2">
  <div id="container" class="clear">
    <section id="slider"><a href="/"><img src={require("../images/demo/evangeline-shaw-xRlI-L-kvrw-unsplash.jpg")} style={{width:960 +'px', height: 660+'px' }}  alt=""/><div className="text-content">2020 National Conference Events</div></a>
    
    </section>
    
    <div id="homepage">
      <section id="services" class="clear">
        {items.map(item =>
       ( <article class="one_third lastbox">
          <figure><img src={require("../images/demo/6.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
          
            <figcaption key={item.id}>
              <h2>{item.topic}</h2>
            <i>{item.tagline}</i> <br/>
            <i>Room Capacity:{item.room_capacity}</i>
        <i className="fa fa-map-marker" aria-hidden="true">{item.location}</i>
              
              <i className="fa fa-microphone" aria-hidden="true">{item.speaker}</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true">{item.price}</i>
              
              <i className="fa fa-clock-o" aria-hidden="true">{item.time}</i>
              
              <Link  to="eventreg" className="eventbttn" onClick={this.eventReg}>Book Event</Link>
            </figcaption>
          </figure>
        
        </article>
        )
        )}
      </section>
     
    </div>
  </div>
</div>

        </div>


        )
    }
}}