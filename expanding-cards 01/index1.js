const images = document.querySelectorAll(".images");

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeactive();
    image.classList.add("active");
  });
});

const removeactive = () => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
};
