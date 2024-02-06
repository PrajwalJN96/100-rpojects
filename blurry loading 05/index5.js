const image = document.getElementById("container");
const load = document.getElementById("load");

let count = 0;
let blur = 8;

let startLoad = setInterval(() => {
  load.innerText = `${count}%`;
  count++;
  blur -= 0.08;
  image.style.filter = `blur(${blur}px)`;
  if (count > 100) {
    load.innerText = "";
    clearInterval(startLoad);
  }
}, 20);
