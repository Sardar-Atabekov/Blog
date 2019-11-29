function postData(event) {
  event.preventDefault();
  let formData = new FormData(event.target),
    id,
    data = {};

  if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id")) + 1;
    localStorage.setItem("id", JSON.stringify(id));
  } else {
    id = 1;
    localStorage.setItem("id", JSON.stringify(id));
  }
  data.id = id;
  formData.forEach(function(value, key) {
    data[key] = value;
  });

  console.log(data);
  let target = event.target;
  console.log(target);
}

export default postData;
