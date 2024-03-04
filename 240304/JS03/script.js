// const season = [];
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// const fruits = new Array("사과", "복숭아", "포도");
// console.log(fruits);

// fruits[4] = "배";
// console.log(fruits);

// console.log(fruits[3]);

// undefined : 아직 정의되지 않은 값. 할당되지 않은 값.
// null : 유효하지 않은 상태. NaN.

// fruits[0] = "오렌지";
// console.log(fruits);

// console.log(fruits.length);
// 배열의 전체 아이템 갯수를 찾아올 때 : length
// 배열의 인덱스 값은 0부터 시작한다. => 배열 안에 가장 마지막 아이템의 인덱스 값 => arr.length - 1

// code를 작성해서 UI로 구현하고자 하는 거의 대부분의 값들은 1개 이상의 컨텐츠가 대부분.
// 배열을 사용하는 중요한 이유 = 반복문!
// 일반 for문 / for of문 / forEach

const colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach((color) => {
//   console.log(color);
// });

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`[${array}][${index}] : ${color}`);
// });
