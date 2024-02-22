// window.onload = alert("안녕하세요!");

// 마우스 이벤트 //
// const body = document.querySelector("body");
// // body 태그는 기본적으로 내장되어있는 태그이기 때문에 선언하지 않아도 사용 가능. window.document.body
// const button = document.querySelector("button");

// // 변수 뒤에 붙을 수 있는 것. 속성, 메소드
// button.onclick = () => {
//   body.style.backgroundColor = "Green";
// };
// // ㄹㅣ팩토링
// const btnFnc = () => {
//   body.style.backgroundColor = "Green";
// };
// button.onclick = btnFnc;

// 키보드 이벤트 //

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key : ${event.key}
//   `;
// };

// 외부 스크립트로 이벤트 처리하기
// 이벤트 핸들러를 활용하여 이벤트 처리하기
// const button = document.querySelector("button");
// button.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// };

// 이벤트 리스너를 활용하여 이벤트 처리하기
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "lightyellow";
// });

// // const form = document.querySelector("form"); 인풋을 감싸안고있는 폼태그를 활용해도 된다.
// const button = document.querySelector("input[type='submit']");
// // console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const word = document.querySelector("input[type='text']").value;
//   console.log(word); //검색기능의 기본 ~ 검색창에 입력한 값을 불러와야하니깐
//   const result = document.querySelector(".result");

//   const count = word.length;
//   result.innerText = count;

//   if (count >= 10) {
//   } else {
//     alert("아이디는 10자 이상이여야 합니다.");
//   } // 회원가입이나 로그인 페이지에서 글자수에 조건을 걸 때 사용
// });

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code}, 
  key: ${e.key}
  `;
});
