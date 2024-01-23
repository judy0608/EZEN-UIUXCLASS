const trigger = document.querySelector(".trigger");
const gnb = document.querySelector("#gnb");
const header = document.querySelector("header");
console.log(header);
const gototop = document.querySelector("gototop");
console.log(gototop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 455) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// console.log(trigger);
// console.log(gnb);

trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});

gototop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});
