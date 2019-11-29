import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/404/NotFound.js";
import Entries from "./components/entries/entries";


import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Entries} />

          <Route path="*" exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
