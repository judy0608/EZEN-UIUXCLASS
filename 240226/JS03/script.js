const accent = document.querySelector("#accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");

const userDay = prompt("원하시는 기념일을 입력하세요!", "ex. 2024-01-09");

const now = new Date();
const firstDay = new Date(`${userDay}`);

const toNow = now.getTime();
const toFirst = (toNow = toFirst);
const passedTime = toNow - toFirst;
const passedDay = Math.floor(passTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDay}일`;

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();

  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month} ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// // 100일째 되는 날
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();

// date100.innerText = `${year}년 ${month} ${date}일`;

// // 200일째 되는 날
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date200.innerText = `${year}년 ${month} ${date}일`;

// // 365일째 되는 날
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date365.innerText = `${year}년 ${month} ${date}일`;

// // 500일째 되는 날
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date500.innerText = `${year}년 ${month} ${date}일`;
