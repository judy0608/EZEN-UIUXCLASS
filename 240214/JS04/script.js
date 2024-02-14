// 사용자에게 키와 몸무게의 정보를 받아서 사용자가 현재 적정 체중인지 확인 후 웹 브라우저 화면에 다음과 같이 출력해주세요
// 만약 적정 체중이라면 "적정 체중이시네요. 축하드립니다."라는 메세지가 출력되게 해주시고, 만약 적정 체중이 아니라면 "조금만 더 노력해주세요!"라는 메세지가 출력되게 해주세요.
// 적정 체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정 체중 구하는 공식을 통한 결과값 +- 5kg까지 허용!

// 사용자에게 키 값을 받아온다.
// 사용자에게 몸무게 값을 받아온다.
// 사용자에게 받아온 키와 몸무게 값을 가지고 적정체중을 구한다.
// 적정체중을 구한 뒤 + - 5kg의 범위를 설정한다.
// 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다.
// 최종 결과값을 웹브라우저 화면에 출력한다.

const userName = prompt("당신의 이름을 말씀해주세요.", "ex.홍길동");
const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?", "ex. 163cm"));
const userWeight = Number(
  prompt("당신의 몸무게는 어떻게 되십니까?", "ex. 55kg")
);

const normalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
result = result
  ? "적정체중이시네요! 축하드립니다."
  : "적정체중이 아닙니다. 노력해주세요!";
document.write(`${userName}님 ${result}`);
