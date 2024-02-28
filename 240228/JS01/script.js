// // 객체 (Object)
// // 객체는 반드시 프로퍼티로 구성되어 있다. 프로퍼티 = 속성
// // key : value = 1쌍의 프로퍼티 = 객체

// // 1번째 방법
// const book1 = {
//   title: "자바스크립크",
//   pages: 486,
// };

// console.log(book1);

// console.log(book1.title);
// // 객체 뒤에 온점을 찍고 키값을 입력하면 해당 벨류값을 불러온다 = 온점표기법

// console.log(book1["pages"]);
// // 대괄호 안에 큰따옴표 안에 키값을 입력해서 불러온다 = 대괄호표기법

// book1.pages = 50;
// book1.author = "judy";
// console.log(book1);
// // 온점 표기법과 대괄호표기법으로 호출시킨 후 재할당 과 추가 할당을 할 수 있음

// // 2번째 방법 (사용빈도 낮음)
// // new 라는 예약어 사용 new Date() , new Object() , new Array() ...등
// // 프로토타입 = 붕어빵 틀
// // 인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵
// // 대문자로 시작하는 함수 : 클래스 활용
// const book2 = new Object();
// console.log(typeof book2);

// book2.title = "Typescript";
// book2.pages = 500;
// book2.author = "judy";
// console.log(book2);

// // 딜리트를 활용해서 키값을 삭제
// delete book2.pages;
// console.log(book2);

// ===== //

// // 객체 중첩
// 반복문의 중첩
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }

// 조건문의 중첩
// if (true) {
//   if (true) {
//     console.log("true");
//   }
// }

// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// console.log(student.score.history);
// console.log(student.score.average());
// // 객체 안에 객체 안에 키값 = 체이닝 기법
// // ex. window.document.querySelector();
// const window = {
//   document: {
//     querySelector: function () {},
//   },
// };
// // 이렇한 객체를 메서드 라고 부른다. 메서드 = 함수

// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy: function () {
//     // buy() {} 이렇게도 표기 가능
//     console.log("이 책을 구입했습니다");
//   },
// };

// console.log(book3);

// this 객체 주의사항
// addEventListener => 콜백함수로 화살표 함수를 쓰게 됐을때 this는 상위 요소가 아닌 윈도우를 의미한다.
// addEventListener => 콜백함수로 익명 함수를 쓰게 됐을때 this는 바로 위 상위 요소를 의미한다.
// addEventListener => 객체 매서드 함수로 화살표 함수를 쓰게 됐을때 this는 상위 요소가 아닌 윈도우를 의미한다.
// addEventListener => 객체 매서드 함수로 익명 함수를 쓰게 됐을때 this는 바로 위 상위 요소를 의미한다.

// const book4 = {
//   title: "Html5+Css3",
//   pages: 400,
//   author: "Peter",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는중") : console.log("완독");
//   },
// };
// book4.finish();

// 객체 = 참조타입의 자료 = 객체, 배열 = reference
// 참조타입의 반대 : 원시타입의 자료 = 숫자, 문자, 논리 = primite
// 원본 데이터 자료 && 사본 데이터 자료 의 차이

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };

// 커스텀 아이징 된 객체를 생성하고자 할 떄 '생성자 함수'를 활용.
// 생성자 함수는 다른 일반적인 함수와는 기능이 상이하다. 함수 이름의 첫 글자를 대문자로 입력.
// 생성자 함수 = 붕어빵 틀
// 생성자 함수를 통해 만들어질 객체 = 붕어빵 = 인스턴스 객체 = 키 : 밸류

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  };
}

const book1 = new Book("자바스크립트", 648, false);

const book2 = new Book("파이썬", 360, true);

console.log(book2);

// class

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  }
}

const book4 = new Book2("html5", 380, true);
console.log(book4);
