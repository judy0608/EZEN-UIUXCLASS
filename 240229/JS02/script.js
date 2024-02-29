// 문자열
// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Morning!";

// // console.log(typeof str);
// // typeof :
// // .length : 해당 문자열의 갯수
// // charAt(n) : n번째 문자 열을 찾을 때 / 0부터 시작
// console.log(str.length);
// console.log(greeting.length);
// console.log(str01.charAt())

// const string = prompt("문자열을 입력하세요");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count = +1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다.`);

// =============================== //

const str1 = "Good morning, everyone. Beautiful morning :)";
console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));
// 존재하지 않은 건  -1 값이 나온다
// console.log(str1.indexOf("morning", firstIndex + 1));

// 댓글이나 아이디를 생성할 때 욕설 사용을 방지할 때 많이 사용.
const str2 = "Hello, everyone";

console.log("===== startsWith =====");
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1)); // 1번째 인덱스 값에 시작되는게 el 이 맞는지
console.log(str2.startsWith("o", 4));

console.log("===== endsWith =====");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo everyone"));

console.log("===== includes =====");
console.log(str2.includes("every"));
console.log(str2.includes("one"));

console.log("===== trim methods =====");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef "; // 큰따옴표 안에 있는 띄어쓰기도 문자열로 인식
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim()); // 앞쪽과 뒷쪽의 빈공간을 없애는 함수
console.log(str3_1.trimStart()); // 앞쪽의 빈공간을 없애는 함수
console.log(str3_1.trimEnd()); // 뒷쪽의 빈공간을 없애는 함수

console.log("===== Uppercase / Lowercase =====");
let str4 = "Good Morning";
console.log(str4.toUpperCase()); // 대문자로 변환
console.log(str4.toLowerCase()); // 소문자로 변환

console.log("===== substring =====");
console.log(str4.substring(5, 8)); // 첫번째 매개변수(=5)부터 두번째 매개변수(=8) "앞"까지
console.log(str4.substring(5)); // 매개변수부터 마지막까지
// 음수값을 전혀 인식하지 못해서 음수값이 들어오는 순간 바로 0으로 치환시킨다.

console.log("===== slice =====");
console.log(str4.slice(0, 4)); // 첫번째 매개변수(=0)부터 두번째 매개변수(=4) "앞"까지
console.log(str4.slice(0));
// slice()는 음수를 사용할 수 있는 특징이 있음
console.log(str4.slice(-5, 11));

console.log("===== split =====");
const str5 = "Hello everyone";
const array1 = str5.split(" "); // 매개변수를 기준으로 배열로 만들어주는 역할
const array2 = str5.split("");
console.log(array1);
console.log(array2);
