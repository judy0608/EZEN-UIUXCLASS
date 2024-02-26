// 1번 예제

// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);

// document.body.insertBefore(tsNode, basisNode);

// 2번 예제

// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parentH1);

// heading.addEventListener("click", () => {
//   heading.remove();
// });

// this 객체
// 조건 > 현재 선택한 li 태그를 this 객체로 대체해서 사용할 수 있다. 단, 클래스 함수를 사용할 때에만 가능.
// 화살표 함수를 사용할 때에는 this 객체가 이벤트를 실행시키는 당사자 = 주최가 되는 것이 아니라 window 객체가 this가 됩니다.

// const items = document.querySelectorAll("li");
// console.log(items);
// for (let item of items) {
//   item.addEventListener("click", () => {
//     item, parentNode.removeChild(item);
//   });
// }

// const items = document.querySelectorAll("li");
// console.log(items);
// for (let item of items) {
//   item.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

// 3번 예제
// products 안에 p 태그들 불러오기
// 액스 누르면 선택된 p 태그 사라지게 하기 (이벤트)

// const cart = document.querySelector("#cart");
// const products = document.querySelectorAll("#products");

// for (let product of products) {
//   product.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

// ========== 선생님 풀이 ========= //

const btns = document.querySelectorAll("p span");
// console.log(btns); < 노드리스트 확인

for (let btn of btns) {
  btn.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
