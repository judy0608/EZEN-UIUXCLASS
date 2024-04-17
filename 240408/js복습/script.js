// React.js 에서 자주 사용되는 Javascript 주요 문법 정리

// 1. 객체 줄임 표기법

// const name = "David";
// const age = 20;

// const person = {
//   name: name,
//   age: age,
// };

// console.log(person);

// 2. 구조 분해 할당

const person = {
  name: "David",
  age: 20,
};

// const name = person.name;
// const age = person.age;

const { name, age } = person;

console.log(name, age);

// 3. 전개연산자 구문
