import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";
class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <div>
          <h1>404</h1>
          <p>У нас нет такой страницы :(</p>
          <Link to="/">
            <button>На главную</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
