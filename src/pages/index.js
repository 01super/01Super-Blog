import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";
import List from "./List";
import Detial from "./Detial";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/detial/:id">
            <Detial />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
