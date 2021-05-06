import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function About(){
  return <h2>About the page</h2>
}
function Home(){
  return <h2>Home of the page</h2>
}
function Contact(){
  return <h2>Contact of the page</h2>
}
function NavBar(){
  return <div class="navbar navbar-default">
    <ul class="nav navbar-nav">
      
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/About" >About</Link></li>
    <li><Link to="/Contact" >Contact</Link></li>
    </ul>
  </div>
  
}

class RouterExample extends React.Component {
  render() {
    return <React.Fragment>
      
    <Router>

      <div class="text-center">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
      </div>
    </Router>
    </React.Fragment>
  }
}

export default RouterExample;