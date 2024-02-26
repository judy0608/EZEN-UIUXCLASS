const btn = document.querySelector("button");
// console.log(btn);
const popupWidth = 600;
const popupHeight = 500;

btn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupHeight) / 2;
  window.open(
    "pop.html",
    "event",
    `width = ${popupWidth} height = ${popupHeight} left = ${left} top = ${top}`
  );
});
