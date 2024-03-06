const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또의 규칙
// 한 번 추첨 시 반드시 6개의 숫자가 나와야하고, 숫자가 중복되서는 안된다.
// 각각의 숫자는 1~45까지 가능하다.

// 1부터 45까지의 숫자, 랜덤 => 수학객체 random() * 45
// 6번 반복 해야한다 => 반복문
// 결과값이 중복되서는 안된다 => Set() 객체로 들어가야한다.
// result 에 출력 => innerText

// const lottoPlay = () => {
//   const myNumber = new Set();
//   for (let i = 0; i < 6; i++) {
//     // const lucky = Math.floor(Math.random() * 45) + 1;
//     // console.log(lucky);
//     myNumber.add(Math.floor(Math.random() * 45) + 1);
//   }
//   console.log(myNumber);
// };

// button.addEventListener("click", lottoPlay);

// 구조분해할당 사용 ⬇️

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    // const lucky = Math.floor(Math.random() * 45) + 1;
    // console.log(lucky);
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
  // console.log(myNumber);
};

button.addEventListener("click", lottoPlay);

// 내가 푼거
// const lottoPlay = () => {
//   // console.log("click");
//   const randomNum = Math.ceil(Math.random() * 45);
//   console.log(randomNum);
// };
// Math 함수 중 floor 와 ceil 중 선택

// let num = (i) => {
//   i > 0;
//   i =< 45;
// };
