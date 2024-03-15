// word game //

const search = document.querySelector(".word_text form");
console.log(search);

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  console.log(word, myword, lastword, firstword);

  if (lastword === firstword) {
    // const result = document.querySelector("#result");
    // result.innerText = "정답입니다!"; 아래와 같이 줄여쓰기 가능!
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
};

search.addEventListener("submit", gameStart);

// 비동기방식으로 자바스크립트를 실행시키게 되었을 때 발생하는 오류,..?

// lotto game //

const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "다시 클릭!";
  }
};

button.addEventListener("click", startLotto);
