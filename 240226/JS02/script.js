// // console.log(today.getFullYear);
// const today = new Date();
// // const theDay = new Data("2025-2-25");
// const theDay = new Date(2025, 2, 25);
// // console.log(theDay.getMonth());

// // 프로그래밍 언어
// const book1 = {
//   title: "자바스크립트",
//   price: 30000,
//   publishing: "2025-05-05",
// };

// class Book {
//   constructor(title, price, publishing) {
//     this.title = title;
//     this.price = price;
//     this.publishing = publishing;
//   }
// }

// const book2 = new Book("자바스크립트", 30000, "2025-05-05");
// console.log(book2);

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate;

// document.write(<h1>오늘 날짜 정보</h1>);
// document.write(`현재 월 : ${nowMonth}월<br/>`);
// document.write(`현재 일 : ${newDate}일`);

// const open = new Date(2024 - 01 - 09);
// const theMonth = open.getMonth() + 1;
// const theDate = open.getDate();

// document.write(<h1>개강일 날짜 정보</h1>);
// document.write(`개강일 몇 월 : ${theMonth}월<br/>`);
// document.write(`개강일 몇 일 : ${theDate}일`);

// 밀리초
// 1밀리초 = 1/1000초
// 1초 = 1000밀리초
// 1분 = 60초 = 60000밀리초 (60*1000)
// 1시간 = 60분 = 3600000밀리초 (60*60*1000)
// 1일 = 24시간 (24*60*60*1000)

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - today.getTime();
console.log(diffDate);

const result = diffDate / (24 * 60 * 60 * 1000);
console.log(result);

document.write(`dusakf D-day ${result}일 남음`);
