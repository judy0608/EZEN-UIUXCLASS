// 동기 & 비동기 //
// JS = 객체 지향 언어
// 태생적으로 동기 처리 방식을 하도록 만들어졌다.
// ex. 외부에서 json 형식의 데이터를 가져와서 웹브라우저에 출력해야 하는 상황이라면 ?
// 동기 : 순차적으로 무언가를 처리한다는 뜻

// JS 동기이지만 특정상황에서는 비동기처리를 할 수있도록 해얗하지 않을ㅏ까

// 비동기 처리 방식이 총 3번에 걸쳐서 업그레이드가 되어왔다.

// 1) 콜백함수
// 2) 프로미스 Promise 객체
// 3) async, await 키워드 사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 여기서 비동기가 된다는 것은 ??
// 제 아무리 displayB 함수의 호출이 displayC 함수의 결과값이 먼저 나오게 할 수만 있다면, 우리는 자바스크립트 언어를 비동기 처리가 된 것 처럼 만들어 낼 수 있는 것 !
// 동기적 방식으로 가져온 것 ..?
// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 두번째, 비동기적 방법으로 가져온것
// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// 세번째
// const display = (result) => {
//   console.log(`${result} 준비완료`);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

// 콜백 지옥

// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("stop!");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displayLetter();

// Promise 객체
