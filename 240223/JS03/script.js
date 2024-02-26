// 1번 예제
// const newP = document.createElement("p"); // 태그 형태의 노드를 만드는 작업 //
// console.log(newP);
// // HTMl 에서 TAG(태그)라고 불리는 것들은 자바스크립트(Javascript)에서는 Node(노드)라고 불림.
// const textNode = document.createTextNode("TypeScript");
// console.log(textNode);
// newP.appendChild(textNode);
// // appendChild : 자식 요소로 넣을 때 //

// document.body.appendChild(newP);
// // newP를 바디태그의 자식요소로 포함시켜서 화면에 노출시키기 //

// 2번 예제
// 주문하기 버튼을 누르면 책 제목이 하단 오더인포부분에 출력되게 만들기
// 제목부분 불러오기
// 버튼 불러오기
// 오더인포 불러오기
// 이벤트 발생 = 버튼 클릭
// 오더인포에 출력

// const title = document.querySelector("#container h2");
// console.log(title);
// const btn = document.querySelector("#order");
// console.log(btn);
// const info = document.querySelector("#orderInfo");
// console.log(orderInfo);

// document.body.addEventListener;

// ========== 2번 예제 : 선생님 풀이 ========== //
// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     newP.appendChild(textNode);
//     newP.style.color = "crimson";
//     newP.style.fontSize = "1.2rem";
//     orderInfo.appendChild(newP);
//   },
//   { once: true }
// );

// // 3번 태그에서 사용할 수 있는 속성노드 만들어주기
// const newImg = document.createElement("img");
// const srcNode = document.createAttribute("src");
// srcNode.value =
//   "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
// newImg.setAttributeNode(srcNode);
// document.body.appendChild(newImg);
// console.log(newImg);
