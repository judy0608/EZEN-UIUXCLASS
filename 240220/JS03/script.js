// const button = document.querySelector("#toggle-box");
// console.log(button);

// button.onclick = () => {
//   button.style.
// }

// 다크모드로 바꾸기 미션 풀이
const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");

// console.log(body);
// console.log(button);

button.onclick = () => {
  // console.log("click");
  // body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크ㄴ모드로 바꾸기";
  }
};
