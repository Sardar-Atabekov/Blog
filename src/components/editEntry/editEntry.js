import React, { Component } from "react";
import Header from "../header/header";
import UpdateData from "./updateDate";
class AddEntry extends Component {
  render() {
    let id = this.props.match.params.id,
      data = JSON.parse(localStorage.getItem("entries"));
    data = data.filter(item => item.id === +id)[0];

    return (
      <div className="wrapper">
        <Header />
        <div className="addEntry">
          <form className="form" onSubmit={(event)=>UpdateData(event, data.id)}>
            {data ? (
              <div className="form-row">
                <div className="title-block">
                  <div className="form-title">
                    <h6 className="form-text">Entry Page</h6>
                    <p className="form-text">Entry information</p>
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
                    defaultValue={data.title}
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
                    defaultValue={data.imageURL}
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
                    defaultValue={data.briefDescription}
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
                    defaultValue={data.description}
                  ></textarea>
                </div>
                <button className="addBtn">Добавить</button>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default AddEntry;
