function deleteData(event, key) {
  console.log(key);
  let entries = JSON.parse(localStorage.getItem("entries"));
  console.log(entries);
  entries = entries.filter(item=>item.id!==key);
  console.log(entries);
  localStorage.setItem("entries", JSON.stringify(entries));
}

export default deleteData;
