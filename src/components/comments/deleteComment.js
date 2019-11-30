function deleteComment(event, key) {
  console.log(key);
  let entries = JSON.parse(localStorage.getItem("entries"));
  console.log(entries);
  entries = entries.map(item => {
    item.comments=item.comments.filter(item=>item.idComment!==key);
    return item;
  });
  console.log(entries);
  localStorage.setItem("entries", JSON.stringify(entries));
  event.target.parentNode.remove();
  alert("Удалена!");
}

export default deleteComment;
