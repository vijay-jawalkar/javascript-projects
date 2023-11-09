import "./styles.css";

const buttons = document.querySelectorAll(".button");
const body = document.body;
// body.style.backgroundColor = "yellow"
// console.log(buttons)

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else {
      window.alert("Invalid Color");
    }
  });
});
