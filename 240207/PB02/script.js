const trigger = document.querySelector(".trigger");
const modalGnb = document.querySelector(".modal-gnb");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  if (modalGnb.style.display === "none" || modalGnb.style.display === "") {
    modalGnb.style.display = "block";
  } else {
    modalGnb.style.display = "none";
  }
});
