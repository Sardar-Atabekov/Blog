function Time() {
  let options = {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };

  let time = new Date().toLocaleTimeString("ru", options);
  return time;
}

export default Time;
