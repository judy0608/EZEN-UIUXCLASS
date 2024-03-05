// React => 구조 분해 할당

// const fruits = ["사과", "복숭아"];
// // const apple = fruits[0];
// // const peach = fruits[1];

// const [apple, peach] = fruits;
// console.log(apple, peach);

// const [teacher, ...students] = ["Park", "Kim", "Choi", "Lee"];
// console.log(teacher, students);

// const member = {
//   name: "kim",
//   age: "25",
// };

// const { name: username, age } = member;
// console.log(username, age);
// // 객체의 구조분해 할당에서는 반드시 유의사항이 존재하는데, 구조분해할당 값을 전달 받을 변수의 이름 = 객체의 key명과 동일해야한다.
// // 값을 가져온 이후에는 :(콘론기호)와 함께 바꾸고자 하는 이름을 입력해주면 바꿀 수 있다.

const student = {
  name: "슛돌이",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2);
