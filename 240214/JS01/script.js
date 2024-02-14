// 자료형
// 변수에 담겨질 수 있는 값의 형태를 의미한다
// 숫자형 / 문자열 / 논리형 / 객체 / 배열 / 심벌 / 함수
// 객체 => { key: value } => property (*프로퍼티 = 속성)

// 객체 > 배열

// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];
// 값이 없어도 배열 가능.

// index 배열이 생성되는 순간 인덱스 값이 부여됨. 0부터 시작.
// lenght 배열안에 있는 객체의 갯수값

// console.log(arr);
// console.log(arrStr.length);

// 심벌 : 유일무이한 값을 저장하고 관리하고 싶은 경우에 사용

// let var1 = Symbol();
// let var2 = Symbol();

// 비교연산자 => 서로 다른 피연산자를 비교할 때 사용하는 연산자

// console.log(var1 === var2);

// e-commerce = 쇼핑몰
// 회원들의 개인정보

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };
// member01.id = 6789;
// console.log(member01);

// const member02 = {
//   name: "Park",
//   id: "abc",
// };
// console.log(member02);

// let grade = Symbol("grade");
// member01[grade] = "VIP";
// console.log(member01);

// const fnc = function () {
//   console.log("test");
// };
//익명함수
// 함수는 이렇게 작성하는 것이 기본문법입니다.
// function fnc01() {}

// prompt() : 사용자가 어떤값을 받아올수 있도록 해주는 함수
// 사용자가 아무리 숫자를 입력 => 문자열 형변환
// 문자열 + 숫자형 => 문자열 : 더하기 연산자만 해당
// - , *

// let str = "20";
// let num = 10;

// Number() : 매개변수로 들어오는 값을 무조건 숫자로 형변환을 시켜주는 함수.
// let result = Number(str) + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(false));
// console.log(Number("Hi!"));
// console.log(Number("20"));
// 일반문자는 넘버함수를 사용하면 형변환이 안되고, NaN 이라는 결과가 나온다,..

// Number() VS parseInt() VS parseFloat()
// 넘버가 가장 큰 개념이다.
// parseInt : 소괄호 안에 들어온 값을 무조건적으로 다 숫자로 바꿀 수 없음. 숫자를 정수(=소수점이 없는 값)로 바꿔주는 역할.
// const userAge = parseInt(prompt("당신의 나이를 입력하세요."));
// console.log(typeof userAge);
// console.log(parseInt(false));

// parseFloat : 소괄호 안에 들어온 값을 실수(=소수점이 있는 값)의 형태로 바꿔주는 역할.
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요."));

// console.log(userHot);

// let num = null;
// console.log(typeof num.toString());
// 숫자를 문자로 바꿔주는 방법.
// 쇼핑몰 10만개 의류 => 바코드 (*문자)

// console.log(typeof String(false));

// String VS toString 의 차이점 null & undefined 를 읽을수 있느냐 없는냐의 차이

// console.log(Boolean());
// null , undefined , 0 은 false 나머지는 전부 true

// 미션 : 사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹브라우저에 화면에 섭씨온도를 출력해주세요!
// 단 소수점도 출력되어야 함.
// 공식 : 섭시온도 = (화씨온도 - 32) / 1.8

const fah = Number(prompt("화씨 온도를 입력하세요!"));
const cel = ((fah - 32) / 1.8).toFixed(1);

document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
// toFixed(1) : 소수점 첫째자리까지만 고정.
