import React, { Component } from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";
import deleteEntry from "./deleteEntry";
import Comment from "./../comments/comments";
import "./entry.css";
class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("entries"));
    if (data&&data.length>0) {
      data = data.filter(item => item.id === +this.props.match.params.id)[0];
      this.setState({ data });
    }
  }
  render() {
    let { data } = this.state;
    return (
      <div className="wrapper">
        <Header />
        <div className="block_container">
          {data && data.id ? (
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
                <input
                  className="deleteBtn"
                  type="button"
                  onClick={event => deleteEntry(event, data.id)}
                  defaultValue="Удалить"
                />
              </div>
              <Comment comments={data.comments} id={data.id}/>
            </div>
          ) : (
            <Link className="btn" to={`/addEntry`}>
              Сначала добавьте запись!
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Entry;
