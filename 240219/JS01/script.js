// prompt();
// alert();
// document.write();

//함수의 생김새: 어떠한 단어=키워드 뒤에 소괄호()가 붙어있다.
//도큐먼트는 객체

// 함수가 작동하려면
// 1) 함수를 구현 = 제작
// 2) 함수를 호출 = 실행

// 함수를 구현하려면 ? 함수를 구현하는 방법 3가지
// 1) 클래스 함수를 구현하는 방법
// 2) 익명 함수를 구현하는 방법
// 3) 화살표 함수를 구현하는 방법

// // 클래스 함수 알아보기
// // 초보 레벨 단계
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// // 중급 레벨 단계 : 반복문 활용
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// // 중급 레벨 단계의 한계 : 재활용성이 없다

// 고급 레벨 단계 : 함수 사용
// 재활용이 가능한 코드로 업그레이드
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
// } //함수를 구현

// calcSum(50); //함수를 호출

//=========================================================//

// //Ex.
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));

// // 클래스 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }

// // 익명 함수
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// // 화살표 함수 :비교적 최근에 나온 함수
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// sum(userNum01, userNum02);

//=========================================================//

// // return문

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   // document.write(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
//   // console.log(sum);
//   return sum;
// }

// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다.`);

// const userNum01 = Number(prompt("첫번째 숫자!"));
// const userNum02 = Number(prompt("두번째 숫자!"));
// const userNum03 = Number(prompt("세번째 숫자!"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// comsole.log(multiple(1, 2, 3));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다. `);
// }

// calcSum(5);

// 자바스크립트를 작성하다보면 큰 이슈
// 엄청 큰 문제점을 발견하면 콘솔창을 통해서 알려준다.
// 아주 사소한 문법상의 문제점은 알려주지 않는다. (오타 등..)
// 코드상에 문제가 발생 => 버그 발생 !
// TS => 실무 : 코드상의 문제를 바로 알려준다.
// 보다 효율적으로 버그를 찾는 방법.

// const hi = "hello!";

// function greeting() {
//   console.log(hi);
// }
// function greeting02() {
//   console.log(hi);
// }
// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }
// console.log(hi);
// change();
// console.log(hi);

// const facter = 5;

// function calc() {
//   return num * facter;
// }

// const num = 10;
// let result = clac();
// document.write(`result : ${result}`);

// JS 권장사항
// 1) var 보다는 let, const 키워드로 변수를 선언

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += 1;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num} 까지 더하면 ${addSum(num)}`);

// 2) 가급적이면 전역 스코프의 변수 선언은 피해라
// 3) 그래서 var, let 보다는 const에 적용해라

// 즉시 실행 함수. 익명 함수로 써도 무관함.

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행 결과값 : ${sum}`);
// }

// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행 결과값 : ${sum}`);
// })(1, 2);

// 화살표 함수

// const example = function () {
//   console.log("hello");
// };
// example();

// Hoisting 기법
// 무언가를 끌어올리다
// class 함수는 hoisting 가능 / 화살표 & 익명 X

// example();

// const example = () => {
//   console.log("hello");
// };

// function example01() {
//   console.log("hello");
// }

// const example01 = () => {
//   console.log("hello");
// };

// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동가능 !

// let hi = function () {
//   return `안녕하세요!`;
// };
// console.log(hi());

// let hi = () => {
//   return `안녕하세요!`;
// };
// console.log(hi());

// let hi = () => `안녕하세요!`;
// console.log(hi());

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;

// 화살표 함수가 탄생한 이유 : (ES6 문법)
// 1) 반복적으로 사용되는 function & 함수명을 생략
// 2) JS의 근본없는 구현 & 호출부의 순서를 명확하게 정의
// 3) 함수의 실행문에서 굳이 중괄호 & return문을 사용하지 않아도 구현 할 수 있도록 해주기 위한 목적!

// 변수 선언 시, 렛/콘스트/바 를 사용하지 않으면 무조건 전역변수화

// function greeting() {
//   hi = "hello";
// }

// const hi = "hello";
// function greeting() {}

// greeting();
// console.log(hi);

// // 콜백 함수
// // 함수 안에 또 다른 함수를 호출하고자 할 떄 부르는 용어

// const btn = document.querySelector("button");
// // console.log(btn);
// const display = () => {
//   alert("오늘도 화이팅입니다 :)");
// };
// btn.addEventListener("click", display);
// // = 같은 결과값이 도출됨
// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅입니다 :)");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요! ${name} 님 나이가 ${age} 살이군요!`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

// JAVA / Python / C 등등 기타 프로그래밍 언어에는 함수가 다 포함되어있는데
// JS 함수는 1급 시민! => first-class citizen
// 모든 프로그래밍 언어에서 1급 시민이 되려면 다음과 같은 조건에 부합해야 한다.
// 1) 함수를 변수에 값으로 할당 할 수 있어야 한다.
// 2) 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야 한다.
// 3) 함수가 또다른 함수의 return문 안에 반환값으로 들어올 수 있어야 한다.
//    => 고차 함수

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`init(30, 20) : ${init(30, 20)}`);

// const addNum = (a, b) => a + b;
// console.log(addNum(1, 3, 5, 7));

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   return str01;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 내장함수 사용
// 자바스크립트 란? 싱글스레드로 작동하는 객체지향 프로그래밍 언어

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!

// const greeting = () => {
//   console.log("안녕하세요!");
// };

// 1000밀리초 = 1초

// setInterval(greeting, 2000);

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval() : 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수. setInterval 과 짝궁.
// 단락회로평가.

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout() : 특정시간이 경과한 이후에 작동하게 만드는 함수.
// heap / callstack / Que

// setTimeout(() => {
//   console.log("안녕하세요!");
// }, 3000);
