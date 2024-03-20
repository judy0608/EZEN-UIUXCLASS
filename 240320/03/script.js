const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  // console.log(scrollNum);
  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3D(0, 0, ${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
