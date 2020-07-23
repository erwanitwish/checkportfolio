import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/back-office'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
