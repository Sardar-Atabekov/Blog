function deleteData(event, key) {
  console.log(key);
  let entries = JSON.parse(localStorage.getItem("entries"));
  entries = entries.filter(item => item.id !== key);
  localStorage.setItem("entries", JSON.stringify(entries));
  event.target.parentNode.parentNode.remove();
  alert("Удалена!");
}

export default deleteData;
