import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListEntries from "./listEntries";
import Header from "./../header/header";
import "./entries.css";
class Entries extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="block_container">
          <div className="functions">
            <Link className="btn" to={`/addEntry`}>Добавить</Link>
          </div>
          <ListEntries/>
        </div>
      </div>
    );
  }
}

export default Entries;
