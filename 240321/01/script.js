const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll(".article");

console.log(circle, articles);

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });

  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
