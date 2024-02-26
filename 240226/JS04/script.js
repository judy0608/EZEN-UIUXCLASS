// 사용자로부터 오늘부터 며칠간 만 보 걷기를 했는지 물어보고 임의의 날짜를 받으세요!
// 00일 연속 달성이라고 출력 될 수 있도록 해주세요!
// 1. 알림창으로 날짜 받기
// 2. 받은 날짜

const userQuery = prompt(
  "만 보 걷기를 시작한 날짜를 입력해주새요",
  "ex.2024-01-09"
);
const toDay = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
