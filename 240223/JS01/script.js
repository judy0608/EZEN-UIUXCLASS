const icons = document.querySelectorAll(".sns a");
// console.log(icons);
// nodelist 엄밀히 따지면 배열이 아니다 ,,?,

for (let icon of icons) {
  icon.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.add("active");
  });
}

icon.addEventListener("mouseleave", (e) => {
  e.currentTarget.querySelector(".fa-brands").classList.remove("active");
});
