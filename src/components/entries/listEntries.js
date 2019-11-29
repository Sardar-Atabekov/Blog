import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListEntries extends Component {
  render() {
    let data = [
      {
        title: "Title",
        imageURL:
          "https://www.impactbnd.com/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg",
        briefDescription: "Comments Comments Comments CommentsCommentsComments",
        quantityComment: 4
      },
      {
        title: "Title",
        imageURL:
          "https://www.impactbnd.com/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg",
        briefDescription: "Comments Comments Comments CommentsCommentsComments",
        quantityComment: 4
      },
      {
        title: "Title",
        imageURL:
          "https://www.impactbnd.com/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg",
        briefDescription: "Comments Comments Comments CommentsCommentsComments",
        quantityComment: 4
      },
      {
        title: "Title",
        imageURL:
          "https://www.impactbnd.com/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg",
        briefDescription: "Comments Comments Comments CommentsCommentsComments",
        quantityComment: 4
      }
    ];
    return (
      <div className="listEntries">
        {data.map(entry => (
          <Link className="entry">
            <img alt="entryTitle" className="entryImage" src={entry.imageURL} />
            <h1>{entry.title}</h1>
            <div className="entryText">{entry.briefDescription}</div>
            <div className="comments">
              <img
                src="https://cdn.icon-icons.com/icons2/936/PNG/512/comment-white-oval-bubble_icon-icons.com_73613.png"
                alt="comment Icons"
                className="commentIcons"
              />
              <span className="quantityComment">{entry.quantityComment}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default ListEntries;
