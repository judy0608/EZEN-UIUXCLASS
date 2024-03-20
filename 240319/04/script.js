// 0% : 스크롤이 시작된 최초의 값
// 100% : ( 스크롤이 끝나는 마지막 좌표값 / 스크롤이 가능한 영역까지 포함한 전체문서 - 현재 보여지고 있는 웹 브라우저 화면 영역 ) * 100

const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

window.addEventListener("scroll", () => {
  // console.log("scroll");
});
