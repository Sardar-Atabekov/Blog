import Time from "./../functions/Time";

function updateData(event, key) {
  event.preventDefault();
  console.log(key);
  let formData = new FormData(event.target),
    data = {};

  data.id = key;
  data.time = Time();
  formData.forEach(function(value, key) {
    data[key] = value;
  });

  let entries = JSON.parse(localStorage.getItem("entries"));
  entries = entries.map(item => (item.id === key ? (item = data) : item));
  localStorage.setItem("entries", JSON.stringify(entries));

  alert("Изменено!");
  
}

export default updateData;
