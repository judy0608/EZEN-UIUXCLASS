// 미션 : 사용자가 이메일 주소를 입력하면 result 공간에 사용자의 이메일 정보를 출력하게 해주세요.
// 단, 이메일 주소 중 @ 앞의 내용을 3번째 자리까지만 출력하고, 4번째자리 부터는 ...으로 표기해주세요.
// Ex. abcde@naver.com >>> abc...@naver.com

// 1. 이메일 밸류 값 불러오기
// 2-1. 실행 버튼 불러오기
// 2-2. 버튼을 눌렀을 때 실행 될 이벤트 정의하기
// 3. 이벤트가 발생된 결과값에 문자열 함수를 적용하기
//    split("@") 으로 배열 만들기 > 아이디 부분에만 substring(0, 3) 적용
// 4. 출력될 공간 = result 불러오기
// 5. result에 결과값을 도출하기

// const email = document.querySelector("#userEmail");
// console.log(email);
// const btn = document.querySelector("input[type='submit']");
// console.log(btn);

// btn.addEventListener("click", ())

// ============== 선생님 미션풀이 =============== //

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
// console.log(userEmail, button, result);

button.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click");
  let userEmail = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}...@${domain}`;
    userEmail.value = "";
    // console.log(userName);
  }
});
