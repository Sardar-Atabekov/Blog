import React, { Component } from "react";
import AddComment from "./addComments";
import "./comment.css";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.comments
    };
  }
  render() {
    let data = this.state.data;
    console.log(data);
    return (
      <div className="commentsBlock">
        {data && data.length > 0
          ? data.map(comment => (
              <div className="comment" key={comment.idComment}>
                <h3>{comment.name}</h3>
                <div>{comment.comment}</div>
                <time>{comment.time}</time>
              </div>
            ))
          : <div className="emptyComments">Нету комментариев</div>}

        <form
          className="addComment"
          onSubmit={event => AddComment(event, this.props.id)}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              id="name"
            />
            <div className="commentBlock description">
              <label htmlFor="comment">Comment</label>
              <br />
              <textarea
                id="comment"
                name="comment"
                required
                className="form-control"
              ></textarea>
            </div>
          </div>
          <button className="btn">Добавить</button>
        </form>
      </div>
    );
  }
}

export default Comments;
