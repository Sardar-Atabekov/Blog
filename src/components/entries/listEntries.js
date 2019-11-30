import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListEntries extends Component {
  render() {
    let data = JSON.parse(localStorage.getItem("entries"));
    return (
      <div className="listEntries">
        {data ? (
          data.map(entry => (
            <Link to={`/entry/${entry.id}`} className="entry" key={entry.id}>
              <img
                alt={entry.title}
                className="entryImage"
                src={entry.imageURL}
              />
              <h1 className="entryTitle">{entry.title}</h1>
              <div className="entryText">{entry.briefDescription}</div>
              <div className="comments">
                <img
                  src="https://cdn.icon-icons.com/icons2/936/PNG/512/comment-white-oval-bubble_icon-icons.com_73613.png"
                  alt="comment Icons"
                  className="commentIcons"
                />
                <span className="quantityComment">{entry.quantityComment}</span>
                <span className="time">{entry.time}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="emptyList">Пока ничего не добавлено!</div>
        )}
      </div>
    );
  }
}

export default ListEntries;
