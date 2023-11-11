const clock = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString("en-IN", { timeZone: "asia/kolkata" });
  clock.innerText = time;
}, 1000);
