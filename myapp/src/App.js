import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import './App.css';
import './components/Home.css'
import Signup from './components/Signup';
import Home from './components/Home';
import EventReg from './components/EventsReg'
import Events from './components/Events';

class App extends React.Component{

  // API CALL TO CHECK IF THE USER IS LOGGED IN OR NOT WHEN THE COMPONENT IS MOUNTED WITH AN ERROR HANDLER AS WELL
  async componentDidMount(){
    try {
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });     
      let result = await res.json();     
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.email = result.email;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }
  // API CODES TO LOGOUT ON THE CLICK OF THE LOGOUT BUTTON
  async doLogout(){
    try {
      let res = await fetch('/logout',{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      
      if (result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.email = '';
      }
    }
    catch(e) {
      console.log(e)
    }
  } 
  render(){
      return(
        <Router>
            <div class="wrapper row1">
            <header id="header" class="clear">
              <div id="hgroup">
                <h1><a href="#">Glory's Event</a></h1>
                
              </div>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/events">Booked Sessions</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li className="last"><Link to="#">Logout</Link></li>
                </ul>
              </nav>
            </header>
          </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/events' component={Events}/>
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={LoginForm} />
              <Route path='/eventreg' component={EventReg} />
          </Switch>
          <div class="wrapper row4">
            <footer id="copyright" class="clear">
              <p class="fl_center">Copyright &copy; 2020 - Software developed by G4 </p>
              
            </footer>
          </div>
      </Router>
      );
  }
}
export default observer(App);
