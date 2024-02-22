const arrows = document.querySelectorAll(".arrow");
// console.log(arrows); 배열 형태
const container = document.querySelector("#container");
let i = 0; //웹 브라우저를 새로고침 할 경우 무조건 인덱스 0 값에서 시작. 재할당을 해줘야하기 때문에 let

const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

// container.style.backgroundImage = ("url(./img/pic-1.jpg"); 이미지 사이즈는 자동 맞춤.
container.style.backgroundImage = `url(./img/${pics[0]})`;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      } // 마지막 인덱스 값 사진의 갯수에서 -1
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      } // 마지막 요소가 끝나면 처음으로 돌아가기
    }
    container.style.backgroundImage = `url(./img/${pics[i]})`;
  });
});
