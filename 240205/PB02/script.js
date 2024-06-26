const btns = document.querySelectorAll(".btn li");
const contents = document.querySelectorAll(".tabs div");
// console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElemant.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const targetContentId = this.getAttribute("data-alt");
    // console.log(targetContentId);
    const targetContent = document.querySelector(`#${targetContentId}`);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
