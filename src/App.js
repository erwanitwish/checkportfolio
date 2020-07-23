import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/backOffice/Login";
import Dashboard from "./components/backOffice/Dashboard";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/back-office'>
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
