const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");

// 개별 아티클의 각도 정의
const deg = 45;

// 인덱스 값을 정의
let i = 0;
const len = lists.length - 1;

lists.forEach((list) => {
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  i++;
});
