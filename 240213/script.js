// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   // alert("오늘도 화이팅!");
//   // confirm("오늘도 화이팅 하시겠습니까?");
//   window.prompt("당신의 이름을 입력해주세요!");
// });

// const name = "장혜진";
// window.document.write("제 이름은" + name + "입니다");

// var num; //num이라는 변수를 선언
// num = 7; //변수안에 값을 할당

// // var 변수는 실무에서는 거의 사용하지 않는 키워드
// var num = 7; //변수를 선언하고 할당
// document.write(num);

// 자바스크립트에서 사용가능한 변수 선언 키워드 3가지!
// const, let, var(*var는 2015년 이전 사용)
// var = variable = 변수 = 유연함 = flexable
// 프로그래밍 언어가 지나치게 유연하면 리스크가 크고, 엄격할수록 리스크가 적다.

// 웹&앱 작업은 혼자서 독립적으로 작업하지 않고, 여러사람이 협업한다.
// 동일한 변수를 재선언 & 재할당 하게 되면 이전 변수가 사라진다.

// const str = "hello world !";
// const str = "hello judy !";
// // const 는 재선언 불가능
// str = "hello";
// // 재할당 불가능
// // const : 재선언&재할당이 원천적으로 불가능
// // const 키워드로 변수를 선언하게 되면, const 안에 담긴 값을 상수라고 부른다. (* 상수=고정값, 변수와 상반)

// let : 원칙적으로 재선언은 불가하지만, 재할당은 가능하다.
// let str01 = "life is good";
// /*let */ str01 = "today is perfect!";

// const data = 5; //숫자형
// const str = "hello"; //문자열
// const boolean = true; //논리형(*참/거짓)

// // 객체
// const title = "최재천의 곤충사회";
// const price = 16200;
// const delivery = "free";
// const author = "최재천";
// const publishingData = "2024-02-10";
// // 위의 값을 객체화시켜 정리하게 되면 아래처럼
const newBook = {
  title: "최재천의 곤충사회",
  price: 16200,
  delivery: "free",
  author: "최재천",
  publishingData: "2024-02-10",
};
// 객체는 {key: value} => 프로퍼티(property)
console.log(newBook.title);
const bookTilte = newBook.title;
document.write(bookTilte);

// //배열
// const arr = [1, 2, 3, 4, 5];
// const newBook01 = ["최재천의 곤충사회", 16200, "free", "최재천", "2024-02-10"];

// const result = prompt("당신의 나이를 입력하세요!");
// console.log(result);
// console.log(typeof result);
// const tenYear = result + 10;
// // console.log("당신의 10년뒤 나이는" + tenYear + "세 입니다");
// console.log(`당신의 10년뒤 나이는 ${tenYear}세 입니다.`);
// // 백틱 기호를 사용

// const num = "10"; // 컴퓨터는 큰따옴표 안에있는 내용을 문자로 인식한다.
// console.log(typeof num);

// 논리형
// const result = confirm("오늘도 점심 드실거죠?");
// if (result === true) {
//   alert("맛있게 드세요!");
// } else {
//   alert("혹시 무슨일 있으세요?");
// }
// console.log(result);
