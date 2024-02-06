const menu = document.getElementById("hamburger");
const container = document.getElementById("container");

menu.addEventListener("click", () => {
  console.log("click");
  container.classList.toggle("active");
});
