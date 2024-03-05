// // 함수, 매개변수 및 인자(*인수)값의 작동 원리
// const hello = (name, message = "안녕하세요") => {
//   console.log(`${name}님, ${message}!`);
// };

// hello("홍길동", "반갑습니다");
// hello("영심이");

// // 함수, 나머지 매개변수
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 2));
// console.log(addNum(1, 2, 3, 4, 5));

// // 배열 //
// // 서로 다른 두개의 배열을 합치고자 할 떄
// // concat() ES6 이전에 사용하던 문법
// const animals = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];
// console.log(animals.concat(fruits));
// // 배열 안에 배열을 넣으면 하나의 배열로 합쳐지는게 아닌 중첩배열 형태로 변환된다.
// const result = [animals, fruits];
// console.log(result);
// // 전개연산자
// const result2 = [...animals, ...fruits];
// console.log(result2);

// const fruits01 = ["apple", "banana", "cherry"];
// const fruits02 = fruits01;
// console.log(fruits01);
// console.log(fruits02);
// fruits01[0] = "grape"; // fruits01(원본배열)의 0번째 인덱스 값을 변경시키면 fruits02(사본배열)에도 영향을 끼친다.
// console.log(fruits01);
// console.log(fruits02);

// // 원본 데이터에만 영향을 주고싶다면..?
// fruits03 = [...fruits01];
// // 전개연산자 구문으로 정의를 시키면 원본데이터 값을 가지고가면서 이후 변경된 값에 대한 영향은 받지 않는다.
// fruits01[0] = "tomato";
// console.log(fruits01);
// console.log(fruits03);

// // 객체 //
// const book = {
//   title: "Javascript",
//   pages: 500,
// };
// // 객체 안에 신규 key & value를 생성하는 방법
// // 온점 표기법
// book.published = "2024-03";
// console.log(book);
// // 대괄호 표기법
// book["author"] = "David";
// console.log(book);

// // 객체, 프로퍼티 이름을 함수로 생성하는 방법

// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키",
//   [`${add(10, 20)}key`]: "계산식 키",
// };
// // 객체의 키를 생성할때는 대괄호 표기법을 사용할 수 있고, 대괄호 안에는 문자열만 가능하다.
// console.log(obj);

// // Symbol(): 유일무이한 값을 생성
// // 외부에서 특정 객체의 키 값을 찾아오지 못하도록 하기 위한 목적
// let id1 = Symbol();
// let id2 = Symbol();
// console.log(id1 === id2);
// // false. 유일무이한 값이기 때문에 같은 심볼은 존재 할 수 없다.

// const id = Symbol("id");
// const tel = Symbol("telnumber");
// console.log(id);

// const member = {
//   name: "David",
//   age: 20,
//   fnc: function () {
//     console.log("test");
//   },
//   [id]: 1235,
//   [tel]: function () {
//     alert(prompt("전화번호 : "));
//   },
// };
// console.log(member);
// // member.fnc();
// // member[tel]();

// for (let item in member) {
//   console.log(`${item} : ${member[item]}`);
// }

// 전역 요소로 심볼을 생성하고 찾아오고 싶을 때

const tel = Symbol.for("tel");
const phone = Symbol.for("tel");
// Symbol에 for함수를 사용하면 유일하게 심볼값을 복제할 수 있다.
console.log(tel === phone);
console.log(Symbol.keyFor(phone));
