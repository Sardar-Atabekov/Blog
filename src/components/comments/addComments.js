import Time from "../functions/Time";

function addComment(event, id) {
  event.preventDefault();
  let formData = new FormData(event.target),
    idComment,
    comment = {};

  if (localStorage.getItem("idComment")) {
    idComment = JSON.parse(localStorage.getItem("idComment")) + 1;
    localStorage.setItem("idComment", JSON.stringify(idComment));
  } else {
    idComment = 1;
    localStorage.setItem("idComment", JSON.stringify(idComment));
  }
  comment.idComment = idComment;
  comment.time = Time();
  formData.forEach(function(value, key) {
    comment[key] = value;
  });

  let entries = JSON.parse(localStorage.getItem("entries"));
  console.log(typeof id);
  entries = entries.map(item => {
    if (item.id === +id) {
    
      item.comments.push(comment);
    }
    console.log(item);
    return item;
  });
  localStorage.setItem("entries", JSON.stringify(entries));
  alert("Добавлено!");
  event.target.reset();
}

export default addComment;
