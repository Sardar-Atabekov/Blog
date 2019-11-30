import Time from './../functions/Time';

function postData(event) {
  event.preventDefault();
  let formData = new FormData(event.target),
    id,
    entries = [],
    data = {};

  if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id")) + 1;
    localStorage.setItem("id", JSON.stringify(id));
  } else {
    id = 1;
    localStorage.setItem("id", JSON.stringify(id));
  }
  data.id = id;
  data.time = Time();
  console.log(data);
  formData.forEach(function(value, key) {
    data[key] = value;
  });

  if (localStorage.getItem("entries")) {
    entries = JSON.parse(localStorage.getItem("entries"));
    entries.push(data);
    localStorage.setItem("entries", JSON.stringify(entries));
  } else {
    entries.push(data);
    localStorage.setItem("entries", JSON.stringify(entries));
  }
  alert("Добавлено!");
  event.target.reset();

  
  
}

export default postData;
