const next = document.getElementById("next");
const prev = document.getElementById("prev");
const line = document.getElementById("line");
const circles = document.getElementsByClassName("circles");

let count = 1;

next.addEventListener("click", () => {
  if (count < 4) {
    count++;
    line.style.width = `${((count - 1) / 3) * 30}vw`;
    ActivatingAndDeactivatingbuttonsAndCircles();
  }
});

prev.addEventListener("click", () => {
  if (count > 1) {
    count--;
    line.style.width = `${((count - 1) / 3) * 30}vw`;
    ActivatingAndDeactivatingbuttonsAndCircles();
  }
});

const ActivatingAndDeactivatingbuttonsAndCircles = () => {
  if (count === 4) {
    next.setAttribute("disabled", "true");
  }
  if (count > 1) {
    prev.removeAttribute("disabled");
  }
  if (count < 4) {
    next.removeAttribute("disabled");
  }
  if (count === 1) {
    prev.setAttribute("disabled", "true");
  }
  const circlesArray = Array.from(circles);

  circlesArray.forEach((circle, index) => {
    if (index <= count - 1) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};
