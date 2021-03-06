import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/404/NotFound.js";
import Entries from "./components/entries/entries";
import Entry from "./components/entry/entry";
import AddEntry from "./components/addEntry/addEntry";
import EditEntry from "./components/editEntry/editEntry";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Entries} />
          <Route path="/addEntry" exact component={AddEntry} />
          <Route path="/entry/:id" exact component={Entry} />
          <Route path="/edit/entry/:id" exact component={EditEntry} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
