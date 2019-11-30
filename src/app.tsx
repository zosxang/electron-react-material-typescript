import * as React from "react";

import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Logo</a>
            <ul id="nav-mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"><a href="#test1">Test 1</a></li>
              <li className="tab"><a className="active" href="#test2">Test 2</a></li>
              <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
              <li className="tab"><a href="#test4">Test 4</a></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router >
  );
}

function Home() {
  return <div>
    <h2>Home</h2>
  </div>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  const match = useRouteMatch();

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

      <div className="container">
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
