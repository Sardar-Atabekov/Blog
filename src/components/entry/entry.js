import React, { Component } from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";
import "./entry.css";
class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id,
      data = JSON.parse(localStorage.getItem("entries"));
    data = data.filter(item => item.id === +id)[0];
    this.setState({ data });
  }
  render() {
    console.log(this.state);
    let { data } = this.state;
    return (
      <div className="wrapper">
        <Header />
        <div className="block_container">
          {data ? (
            <div className="entryBlock">
              <div className="headerEntry">
                <h1 className="title">{data.title}</h1>
                <h2 className="subtitle">{data.briefDescription}</h2>
                <time dateTime={data.time} className="dataEntry">
                  {data.time}
                </time>
              </div>
              <img src={data.imageURL} alt={data.title} className="entryImg" />
              <div className="description">{data.description}</div>

              <div className="entryFunc">
                <Link className="btn" to={`/edit/entry/${data.id}`}>
                  Изменить
                </Link>
                <Link className="deleteBtn" to={`/addEntry`}>
                  Удалить
                </Link>
              </div>
            </div>
          ) : (
            "Сначала добавьте записи!"
          )}
        </div>
      </div>
    );
  }
}

export default Entry;
