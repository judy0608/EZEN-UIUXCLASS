// 버튼 불러오기
// 네비게이션 불러오기
// 가상클래스 설정해서 이벤트 만들기 ..?  =  버튼 클릭 시 네비게이션 나오게 토글은 네비게이션 왼쪽상단으로

// const btn = document.querySelector("#btn");
// console.log(btn);
// const nav = document.querySelector("nav");

// ===== 서ㅓㄴ생님풀이 ===== //

const btn = document.querySelector("#btn");
console.log(btn);
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});
