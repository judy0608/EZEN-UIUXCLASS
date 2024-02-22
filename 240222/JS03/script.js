const elements = document.querySelectorAll("*");
// console.log(elements);

for (let element of elements) {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
