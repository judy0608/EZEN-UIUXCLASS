// 1. 오픈버튼 정의
// 2. 클로즈버튼 정의
// 3. 출력될 모달 페이지 정의
// 4. 이벤트 주기. 버틀 클릭 시 함수
//

const openButton = document.querySelector(".open");
// console.log(openButton);
const closeButton = document.querySelector(".close");
// console.log(closeButton);
const container = document.querySelector(".container");
// console.log(container);

const openFnc = () => {
  openButton.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  container.style.display = "none";
  openButton.style.display = "block";
};

openButton.onclick = openFnc;
closeButton.onclick = closeFnc;
