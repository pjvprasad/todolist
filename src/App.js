import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./examples/example1";
import HelloUser from "./examples/example2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import RouterExample from "./examples/example3";

export default function App() {
    return <RouterExample/>;
  // return (
  //   <Router>
  //     <div>
  //       <NavBar/>

  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/topics">
  //           <Topics />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // );

}

function NavBar() {
  return <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <h2>Hello</h2>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
ReactDOM.render(
  //<ul>{listItems}</ul>,
  // <NumbersList numbers={numbers}/>,
  <App />,
  document.getElementById('root')
);