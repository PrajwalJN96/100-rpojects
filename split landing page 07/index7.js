const car1 = document.getElementById("car-1");
const car2 = document.getElementById("car-2");

car1.addEventListener("click", () => {
  console.log("cl1");
  car2.classList.remove("active");
  car1.classList.remove("inactive");
  car1.classList.add("active");
  car2.classList.add("inactive");
});

car2.addEventListener("click", () => {
  console.log("cl2");
  car1.classList.remove("active");
  car2.classList.remove("inactive");
  car2.classList.add("active");
  car1.classList.add("inactive");
});
