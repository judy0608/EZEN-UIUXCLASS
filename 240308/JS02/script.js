// input 태그를 통해서 사용자에게 임의의 숫자를 받는다.
// 사용자가 숫자를 입력한 후 입력 버튼을 클릭하면 다음과 같은 조건에 따라 아래와 같은 결과가 출력되도록 할 것
// 만약, 10보다 큰 숫자를 입력했다면 알림창을 통해서  "10보다 작은 숫자를 입력하세요!"라는 메세지 출력
// 만약, 10보다 작은 숫자를 입력했다면 result 라는 공간에 해당 숫자가 출력되도록 할 것
// 단 어제 배운 try, catch, finally 문을 활용해서 코드 작성.
// try : 실행문을 작성하는 공간
// catch함수 : 에러가 발생 했을 때 에러메세지를 출력시켜 줄 수 있는 공간
// finally : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 싫행되는 공간

const userNumber = document.querySelector("input[type='text]");
const button = document.querySelector("form");

const resultNumber = (e) => {
  e.preventDefault();
  // console.log("click");
  let n = userNumber.value;

  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요.";
    }
    n = Number(n);
    if (n < 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요.";
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
};

button.addEventListener("submit", resultNumber);
