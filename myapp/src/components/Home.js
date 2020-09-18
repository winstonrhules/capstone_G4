import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css' ;
import '../App.css';

export default class Home extends Component {
    render() {
        return (
        
        <div>
<div class="wrapper row2">
  <div id="container" class="clear">
    <section id="slider"><a href="#"><img src={require("../images/demo/evangeline-shaw-xRlI-L-kvrw-unsplash.jpg")} style={{width:960 +'px', height: 660+'px' }}  alt=""/><div className="text-content">2020 National Conference Events</div></a>
    
    </section>
    
    <div id="homepage">
      <section id="services" class="clear">
        <article class="one_third">
          <figure><img src={require("../images/demo/1.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
            <figcaption>
              <h2>Production Conference</h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true">08:00 AM</i>
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
        <article class="one_third">
          <figure><img src={require("../images/demo/2.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
              
            <figcaption>
              <h2>The design Conference</h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true"> 08:00 AM</i>
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
        <article class="one_third lastbox">
          <figure><img src={require("../images/demo/3.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
            <figcaption>
              <h2>The Great Movie Premier</h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true"> 08:00 AM</i>
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
      </section>
      
      <section id="services" class="clear">
        <article class="one_third">
          <figure><img src={require("../images/demo/4.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
            <figcaption>
              <h2>Community Shield Tournament </h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true"> 08:00 AM</i>
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
        <article class="one_third">
          <figure><img src={require("../images/demo/5.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
              
            <figcaption>
              <h2>Intro to Django Framework</h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true"> 08:00 AM</i>
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
        <article class="one_third lastbox">
          <figure><img src={require("../images/demo/6.jpg")} alt="" style={{width:290 +'px', height: 180+'px' }} />
            <figcaption>
              <h2>DEV TECH Conference</h2>
              <i className="fa fa-map-marker" aria-hidden="true"> Accra, Ghana</i>
              
              <i className="fa fa-microphone" aria-hidden="true"> Gilbert Kennedy</i>
              
              {/* <i>Tagline</i> */}

              <i className="fa fa-money" aria-hidden="true"> GHS 50</i>
              
              <i className="fa fa-calendar-o" aria-hidden="true"> 2020-09-25</i>
              
              <i className="fa fa-clock-o" aria-hidden="true"> 08:00 AM</i>
              
              <Link to="/eventreg" className="eventbttn">Book Event</Link>
            </figcaption>
          </figure>
        </article>
      </section>
     
    </div>
  </div>
</div>

        </div>


        )
    }
}
