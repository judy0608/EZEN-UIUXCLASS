// 버튼 찾아오기
// 상세설명 찾아오기
// 버튼에 이벤트를 부여하기

// const btn = document.querySelector("#view");
// // console.log(btn);
// const detail = document.querySelector("#detail");
// // console.log(detail);

// 선생님 풀이
const viewBtn = document.querySelector("#view");
console.log(viewBtn);
const detail = document.querySelector("#detail");
console.log(detail);

viewBtn.oncilck = function () {
  detail.classList.toggle("hidden");
};
