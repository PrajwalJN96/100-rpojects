const change = document.getElementsByClassName("change");

document.addEventListener("scroll", () => {
  let boxesVisible =
    ((document.documentElement.scrollTop - 100) /
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )) *
    13;
  console.log(
    "scroll px from top",
    document.documentElement.scrollTop,
    "totla px length",
    Math.min(document.body.scrollHeight, document.documentElement.scrollHeight)
  );
  //   console.log(boxesVisible);
  const changeArray = Array.from(change);
  changeArray.forEach((box, index) => {
    // console.log(boxesVisible, index);

    if (boxesVisible > index) {
      box.classList.add("active");
    } else if (boxesVisible < index) {
      box.classList.remove("active");
    }
  });
});
