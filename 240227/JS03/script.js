const buttons = document.querySelectorAll("button");
// console.log(buttons);
const comChoice = document.querySelector(".com-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  userChoice.innerText = user;
  comChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부!";
    // console.log("무승부");
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        // console.log("사용자 승리!");
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        // console.log("컴퓨터 승리!");
        break;
    }
  }
  show(user, computer, message);
};
// 스코프의 개념 정리.. 캐중요!

const play = (e) => {
  // console.log(e.target.innerText);
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
  console.log(user, computer);
};

// 화살표 함수를 사용 할 경우 선 선언 후 싫행의 순서를 지켜야한다.
buttons.forEach((button) => {
  button.addEventListener("click", play);
});
