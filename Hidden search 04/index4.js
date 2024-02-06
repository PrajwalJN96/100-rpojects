const btn = document.getElementById("btn");
const contain = document.getElementById("contain");
const inputs = document.getElementById("inputs");

btn.addEventListener("click", () => {
  console.log("click");
  contain.classList.toggle("active");
  inputs.classList.toggle("active");
  btn.classList.toggle("active");
});
