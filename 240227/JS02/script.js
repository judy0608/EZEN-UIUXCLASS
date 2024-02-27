// 나: 가위, 바위, 보
// 컴: 가위, 바위, 보 (*랜덤)
// 나 : 컴 > 일치 or 불일치
// 컴 : random : 1,2,3

// 여러가지 조건 .. 조건문 .. 스위치

document.write("<h1>컴퓨터와 나의 가위바위보 맞추기 게임</h1>");

const game = prompt(
  "가위, 바위, 보 중 하나를 선택하세요!",
  "ex. 가위 / 바위 / 보"
);

let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘 못 작성되었습니다.");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);

document.write(`<img src="./img/math_img_${com}.jpg">`);

if (gameNum === com) {
  document.write("컴퓨터와 동일합니다!");
} else {
  document.write("컴퓨터와 동일하지 않습니다!");
}

console.log(gameNum, com);

// html를 사용하지않고 스크립트 파일로만 구현시킨 경우 스트립트 링크 앞에 defer를 붙히면 안됨 !!!
