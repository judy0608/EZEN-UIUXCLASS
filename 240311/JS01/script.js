// 동기 & 비동기 //

// 왜 ? 외부에서 데이터를 받아와서 웹브라우저에 출력해야 할 일이 많아졌고,
// 태생적으로 동기처리 방식을 지향하는 자바스크립트를 비동기 형식으로 변환 시키게 되었다.

// JS 비동기 처리방식 사용
// 1) callback 함수
// setInterval()
// setTimeout()
// setClear()
// 콜백 지옥 발생

// 2) Promise 객체 = 약속
// 계획한 싫행이 예정대로 진행되었을 때, 무엇인가를 추가로 실행하겠다! 라는 약속

// const likePizza = false;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// pizza.then((result) => console.log(result)).catch((err) => console.log(err));

// 외부에서 데이터를 가져올 때 예외조항처리를 할수 있다.
// 에러가 발생했을때 미리 에러메세지를 커스텀
// try / catch / finally

const likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

// method chaning 기법
// 하나의 객체 뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
