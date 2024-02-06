const sizes = document.querySelectorAll(".size span");
const colors = document.querySelectorAll(".color span");
const like = document.querySelector(".like");

like.addEventListener("click", () => {
  like.classList.toggle("active");
});

sizes.forEach((size) => {
  size.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
  });
});

colors.forEach((color) => {
  like.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
  });
});
