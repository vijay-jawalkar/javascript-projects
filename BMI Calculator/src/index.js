const form = document.querySelector(".form-container");

let BMI = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let h = parseFloat(document.getElementById("height").value);
  let w = parseFloat(document.getElementById("weight").value);

  if (!isNaN(h) && !isNaN(w)) {
    BMI = (w / ((h / 100) * (h / 100))).toFixed(2);
    document.getElementById("bmi").innerHTML = BMI;
  } else {
    alert("Invalid Input");
  }
});
