//미션. 사용자로부터 오늘 하루동안 지춣한 교통비와 식비, 음료비를 받아서, 계산 한 후에 해당값이 1만원을 초과하는 경우에는 "00원 초과하셨습니다. 조금만 더 노력해 주세요!"라고 웹 브라우저 화면에 출력해주시고, 만약 1만원을 초과하지 않은 경우에는 "00원 남았습니다. 돈 관리 잘 하셨습니다!"라고 웹 브라우저 화면에 출력해주세요

// 오늘 하루 사용한 교통비 / 식비 / 음료비 값 받아오기
// 금액 합계 구하기
// 합계 금액에 따른 출력할 문자열을 구붆한다.
// 최종 결과값을 웹 브라우저에 출력한다.

const userName = prompt("당신의 이름을 말씀햏주세요");
const userTaxi = Number(prompt("오늘 하루 지출한 교통비를 작성해주세요"));
const userBob = Number(prompt("오늘 하루 지출한 식비를 작성해주세요"));
const userJuice = Number(prompt("오늘 하루 지출한 음료비를 작성해주세요"));

const userMoney = userTaxi + userBob + userJuice;
let result = userMoney;

// 선생님 풀이
// 교통비, 식비, 음료비를 받는다.
// 사용자로부터 받은 3개의 값을 계산한다
// 계산된 값이 1만원 미만인지 여부를 확인한다.
// 계산된 값의 결과값에 따라서 "A"메세지를 출력ㅎ할지, ba메세지를 출력할지
// 최종 결정되 ㄴ메세지를 웹브라우저 화면에 출력한다.

const traffic = Number(prompt("교통비를 알려주세요!"));
const eat = Number(prompt("식비를 알려주세요!"));
const drink = Number(prompt("음료비를 알려주새요!"));

const sum = traffic + eat + drink;
let result = sum < 10000;
const result1 = 10000 - sum;
const result2 = sum - 10000;

result = result
  ? `${result1}원 남았습니다. 돈관리 잘 하셨어요!`
  : `${result2}원 초과했습니다. 조금만 더 노력해주세요`;
document.write(result);
