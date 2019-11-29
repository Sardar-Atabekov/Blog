import React, { Component } from "react";
import Header from "./../header/header";
import postData from "./postData";
import "./addEntry.css";
class AddEntry extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="addEntry">
          <form className="form"  onSubmit={postData}>
            <div className="form-row">
              <div className="title-block">
                <div className="form-title">
                  <h6 className="form-text">Entry Page</h6>
                  <p className="form-text">
                    Entry information
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageURL">Image URL</label>
                <input
                  type="text"
                  name="imageURL"
                  required
                  className="form-control"
                  id="imageURL"
                />
              </div>
              <div className="commentBlock">
                <label htmlFor="briefDescription">Brief Description</label>
                <br />
                <textarea
                  id="briefDescription"
                  name="briefDescription"
                  required
                  className="form-control"
                ></textarea>
              </div>
              <div className="commentBlock description">
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  id="description"
                  name="description"
                  required
                  className="form-control"
                ></textarea>
              </div>
              <button className="addBtn">Добавить</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEntry;
