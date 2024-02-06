const items = document.querySelectorAll(".navi li");
const photo = document.querySelector(".photo");

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    const changeImage = this.getAttribute("data-image");
    // console.log(changeImage);
    photo.computedStyleMap.backgroundImage = "url(${changeImage})";
  });
  item.addEventListener("mouseleave", function () {
    photo.computedStyleMap.backgroundImage = "";
  });
});
