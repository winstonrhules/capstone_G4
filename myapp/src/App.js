import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import './App.css';
import './components/Home.css'
import Signup from './components/Signup';
import Home from './components/Home';
import EventReg from './components/EventsReg';
import Events from './components/Events';
// import  LOGOUT_URL from "../constants";

class App extends React.Component{


  // API CALL TO CHECK IF THE USER IS LOGGED IN OR NOT WHEN THE COMPONENT IS MOUNTED WITH AN ERROR HANDLER AS WELL
  async componentDidMount(){
    try {
      let res = await fetch('http://127.0.0.1:8000/api/login/',{
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
   doLogout(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    alert("Currently logged out");
    
  } 
  render(){
    
    if (UserStore.loading){
      return(
        <div className = "app">
          <div className = 'containerr'>
            Loading, please wait...
          </div>
        </div>
      );
    }
    else {
      if (UserStore.isLoggedIn){
        return(
          <div className = "app">
            <div className = 'containerr'>
              Welcome {UserStore.email}
            {/*LOG OUT BUTTON */}
              {/* <SubmitButton
                text = {'Log out'}
                disabled = {false}
                onClick = { () => this.doLogout()}
              /> */}
            </div>
          </div>
        );
      }
      return(
        <Router>
            <div class="wrapper row1">
            <header id="header" class="clear">
              <div id="hgroup">
                <h1><a href="#">Glory's Event</a></h1>
                
              </div>
              <nav>
                <ul>
                  {/* <li><Link to="/">Home</Link></li> */}
                  <li><Link to="/events">Booked Sessions</Link></li>
                  <li><Link to="/">Login</Link></li>
                  <li className="last" onClick={this.doLogout}><Link to="/">Logout</Link></li>
                </ul>
              </nav>
            </header>
          </div>
          <Switch>
              <Route exact path='/' component={LoginForm} />
              <Route path='/events' component={Events}/>
              <Route path='/signup' component={Signup} />
              <Route path='/home' component={Home} />
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
}
export default observer(App);
