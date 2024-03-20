const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const depthWrap = document.querySelector(".depthWrap");
const octopus = document.querySelector(".octopus");

// console.log(progressBar, submarine, depthWrap, octopus);

const percent = (scrollNum, documentHeight) => {
  return (scrollNum / documentHeight) * 100;
};

const deepSea = () => {
  // console.log("deep sea");
  const scrollNum = window.scrollY;
  const span = depthWrap.querySelector("span");
  span.innerText = scrollNum;

  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const per = percent(scrollNum, documentHeight);
  // console.log(per);
  progressBar.style.width = per + "%";

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per}%)`;
};

window.addEventListener("scroll", deepSea);
