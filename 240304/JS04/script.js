// 배열에서 사용할 수 있는 메서드 //

// concat() : 두 개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];
// const cheese = ["모짜렐라", "슈레드"];

// const meatBurger = vegitable.concat(meat, "빵");
// const meatBurger = meat.concat(vegitable, "빵");
// console.log(meatBurger);

// const cheeseBurger = [vegitable, cheese];
// console.log(cheeseBurger);
// 배열 안에 배열이 생성된다. 중첩 배열.

// 전개연산자 구문을 활용해서 하나의 배열로 만들 수 있다.
// const cheeseBurger = [...vegitable, ...cheese];
// console.log(cheeseBurger);

// 배열의 정렬 //

// const numbers = [6, 9, 3, 21, 18];
// numbers.reverse(); // 배열 정렬을 뒤에서부터 찾아오고자 할 떄
// console.log(numbers);

// const values = [5, 20, 3, 11, 4, 15];
// values.sort();
// console.log(values);
// // 숫자의 앞자리 값이 작은 순서대로 나열된다..
// // sort 함수는 작은 숫자를 좌측정렬하려는 속성을 기본적으로 가지고있다.

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// });

// // sort 오름차순 정렬
// values.sort((a, b) => {
//   return a - b;
// });
// // sort 내림차순 정렬
// values.sort((a, b) => {
//   return b - a;
// });

// console.log(values);

// 배열 안에 아이템을 추가 및 삭제하는 메서드 //

// const animals = ["lion", "bear", "bird"];
// // ToDoList 만들때
// console.log(animals);
// animals.pop(); //pop(): 배열 마지막 값을 제거
// console.log(animals);
// animals.push("tiger"); //push(): 배열 마지막에 값을 추가
// console.log(animals);

// const fruits = ["apple", "pear", "banana", "orange", "fineapple"];
// console.log(fruits);
// fruits.shift(); //shift(): 배열 첫번째 값을 제거
// console.log(fruits);
// fruits.unshift("cherry"); //unshift(): 배열 첫번째에 값을 추가
// console.log(fruits);

// split (구분자) : 문자열 -> 배열
// slice (인덱스) : 문자열 내 특정 인덱스 값부터 문자열

// // splice() : 괄호 안에 인덱스 값부터 잘라내기
// const subjects = ["html", "css", "js", "react", "ts"];
// // subjects.splice(2);
// // console.log(subjects);
// // const subjects01 = subjects.splice(2, 4);
// // console.log(subjects01);
// subjects.splice(2, 4, "vue", "node");
// console.log(subjects);

// // slice()
// console.log(fruits.slice(1));
// console.log(fruits.slice(1, 3));
// console.log(fruits);

// splice 함수 && slice 함수 => 매개변수를 1개만 받았을 경우, 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다! 공통점
// splice 함수는 원본 배열 데이터에도 영향을 미치지만, slice 함수는 원본 배열 데이터에 영향을 미치지 않는다. 차이점

// // map() : 원본 배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 새로운 배열로 만들고 싶을 때 사용. 반복문을 쓸 때 많이 찾게 된다.

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((number) => {
//   return number * 2;
// });
// console.log(newNumbers);
// console.log(numbers);

// // const newNumbers02 = numbers.map((number, index) => {
// //   return index + number * 3;
// // }); 아래와 같이 식을 작성할 수 있음
// const newNumbers02 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers02);
// // 실행문 && 표현식문
// // JS 다중패러다임 언어 (*)

// const scores = [90, 35, 64, 88, 45, 92];
// // const highScores = scores.filter((score) => {
// //   return score >= 85;
// // });
// // console.log(highScores);

// const highScores2 = scores.filter((score, index) => {
//   if (score >= 85) {
//     console.log(`index : ${index}, score : ${score}`);
//   }
//   return score;
// });

// reduce() : 누산기. 누적계산기!

const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, current) => {
//   return total + current;
// }, 0);
const result = numbers.reduce((total, current) => total + current, 0);
console.log(result);
