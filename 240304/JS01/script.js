// 정규표현식 = Regular Expression
// 왜 사용 하는가? 어떤 특정 패턴을 정의하고자 할 때, 그리고 그 패턴의 결과 값을 도출하고자 할 때
// 구성 : 패턴[플래그]
// 패턴 = 알파벳 3개로 구성된 문자열
// 플래그 (*옵션) = 대문자? 소문자? 대소문자?

// let regexp = /\d{3}/; // 어떠한 문자열 3개로 구성되어있는 문자를 찾아라
// let regexp = new RegExp(/\d{3}/); // 매개변수로 값을 넣는 것도 똑같음
// console.log(regexp.test("123"));
// console.log(regexp.test("Hello"));
// 테스트라는 메서드함수가 의미하는 것? 정규표현식에 부합되는지에 따라 참인지 거짓인지 나타냄

// let obj = {
//   title: "JS",
// };
// let obj01 = new Object();
// obj01.title = "TS";

// let str = "ES2024 is powerful!";
// // console.log(str.match(/ES6/));
// // str.replace(/ES2024/, "ES6");
// // console.log(str);

// console.log(/es/.test(str));
// // 정규표현식은 대문자와 소문자를 가린다.
// console.log(/es/i.test(str));
// // 대소문자를 가리지 않고 결과값을 받으려면 패턴 뒤에 i 를 붙힌다.

// console.log(str.match(/ES\d\d\d\d/));

// let hello = "Hello, everyone.";

// /^H/.test(hello);
// // ^ : 캐럿
// // H로 시작하는 패턴을 찾겠다.
// console.log(/^H/.test(hello));
// console.log(/^h/i.test(hello));

// /one.$/.test(hello);
// // $ : 특정한 패턴으로 끝날 때
// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// let testStr = "ES2024";

// testStr.match(/[0-9]/g);
// // 16진수 .. Hex컬러코드.. 0~9, a~f
// // g : 글로벌, 해당 요소의 모든 문자열 안에 해당되는 패턴을 모두 찾아와라.
// console.log(testStr.match(/[0-9]/g));
// console.log(testStr.match(/[0-9]/));
// console.log(testStr.match(/[^0-9]/g));
// 캐럿이 범위안에 들어오면 부정연산자가 된다.

let str = "Oooops";
console.log(str.match(/\o\o/));
console.log(str.match(/o{2}/));
console.log(str.match(/o{2,}/)); // 최소2 이상
console.log(str.match(/o{2,4}/i)); // 최소2 최대4 , i : 대소문자 구분 X

// 자주 사용하는 정규표현식 (*선생님 슬랙 참고)
// 숫자만 찾아오고자 할때
/^[0-9]+$/
// 양의 정수값만 찾아오고자 할 때
/^[1-9]\d*$/
// 음의 정수값만 찾아오고자 할 때
/^\-[1-9]\d*$/
// 숫자와 영문자만 찾아오고자 할 때
/^[a-zA-Z0-9]+$/