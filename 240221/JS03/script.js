// 첫번째 수 불러오기
// 두번째 수 불러오기
// 계산하기 버튼 불러오기
// 결과값 자리 불러오기
// 버튼 눌렀을 때 계산식 넣기
// 계산 한 값 도출하기

// const num1 = document.querySelector("#number1");
// // console.log(num1);
// const num2 = document.querySelector("#number2");
// // console.log(num2);
// const btn = document.querySelector("#calc");
// // console.log(btn);
// const result = document.querySelector("#result");
// // console.log(result);

// btn.onclick =

// 선생님 풀이
// 1. 사용자가 입력한 두개의 숫자를 찾아온다
// 2. 출력될 공간을 정의한다.
// 3. 값을 출력시켜주기 위한 연산작업이 필요하다.
// 4. 최대공약수에 대한 개념이 필요하다.
// 5. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다.

const firstNum = document.querySelector("#number1");
// console.log(firstNum);
const secondNum = document.querySelector("#number2");
// console.log(secondNum);
const result = document.querySelector("#result");
// console.log("#result");
const button = document.querySelector("form input[type=submit]");

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
