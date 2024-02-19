// if(조건식이 참이어야) {
//   실행문이 실행 됨
// }

// let x = 10;
// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }
// const userInput = prompt("당신의 이름을 입력하세요");
// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다`);
// }

// const score = Number(prompt("프로그램 점수 : "));
// // 예외조항 처리
// // 중첩 사용 가능 =  반복해서 사용할 수 있다. = 중첩 if 구문
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

// 자료구조 & 알고리즘

// 조건문을 활용해서 사용자에게 어떤 숫자 하나를 받아서 그 숫자가 짝수인지 홀수인지 활인한 이후 알림참을 활용햏서  사용자에게 짝수 혹으 ㄴ홀수입니다 라는 메세지를 출력.
// 프롬프트
// 이프문

// const userNum = Number(prompt("숫자를 입력해주세요"));

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if (userNum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다!");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if(userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다.") : alert("홀수입니다.");
// } else {
//   alert("취소하셨습니다")
// }

// const userPicNum
// camel 표기법
// sneak 표기법 ex.user_picknum
// 헝가리언 표기법 Userpicknum

// 변수명이라고하는 식별자를 사용할 때 쓰면 안되는 것
// 1) 예약어 : 이미 자바스크립트나  윈도우에서 사용중인 고유명사 ex.document, window..
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _, 영문자 가능. 나머지 불가.
// 3) 변수명은 반드시 대소문자 구분. 혼용ㅏㅎ지 말 것

// 미션
// 사용자에게 1~12까지 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림메세지가 출력되게 해주세요.
// 사용자가 입력한 숫자 : 9~11 => 독서의 계절 가을이네요!
// 사용자가 입력한 숫자 : 6~8 => 여행하기 좋은 여름이네요!
// 사용자가 입력한 숫자 : 3~5 => 햇살 가득한 봄이네요!
// 사용자가 입력한 숫자 : 12~2 => 스키의 계절 겨울이네요!

// const userNum = prompt("좋아하는 계절의 월수를 입력해주세요.", "Ex. 6");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if(userNum => 3, userNum =< 5) {
//     alert("ㅎ햇살가득한 봄이네요")
//   }
// }

// 미션 풀이
// let month = prompt("현재는 몇 월 인가요?", "Ex. 2");

// if(month != unll) {
//   month = Number(month);
//   if(month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if(month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if(month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월 입니다.")
//   } else {
//     alert("스키의 계절 겨울이네요")
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 미션
// 사용자에게 아이디와 패스워드 값을 받으세요. 그리고 해당 아이디와 패스워드 값이 다음과 같다면, "반갑습니다. 어러오세요" 라는 알림 메세지를 출력해주세요.
// 아이디: ezenit / 패스워드 : 1234
// 그런데 만약 아이디만 일치하고 패드워드가 틀렸을 경우에는 "비밀번호룰 확인해 주세요!"라는 알림 메세지를 출력해주시고, 만약 아이디와 패스워드 둘 다 틀렸을 경우에는 "아이디를 확인해 주세요!" 라는 알림 메세지를 출력해주세요.

// const id = prompt("아이디를 입력해주세요");
// const pw = prompt("비밀번호를 입력해주세요");

// if(id != null) {
//   if(id = "ezenit" && pw = "1234") {
//     alert("반갑습니다 어서오세요")
//   } else if(id = "ezenit" && pw = )
// }

// 미션 풀이
// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("당신의 아이디는?");
// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다.`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다.");
//   location.reload();
// }

// switch(조건식 => 참) {
//   case 값 : 실행문;
//   break;
//   case 값 : 실행문;
//   break;
//   case 값 : 실행문;
//   break;
//   case 값 : 실행문;
//   break;
//   case 값 : 실행문;
//   break;
// }

const subject = prompt("신청할 과목을 선택하세요.", "1-HTML, 2-CSS, 3-JS");

if (subject !== null) {
  switch (subject) {
    case "1":
      alert("HTML을 신청하셨습니다.");
      break;
    case "2":
      alert("CSS를 신청하셨습니다.");
      break;
    case "1":
      alert("JS를 신청하셨습니다.");
      break;
    default:
      alert("잘못 입력 하셨습니다.");
      location.reload();
  }
} else {
  alert("취소하셨습니다.");
}

// 미션
// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요.
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11st / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면, prompt창에 "확인"버튼을 클릭하는 순간 해당 쇼핑몰로 바로 이동하게 만들어주세요.

// window 객체 안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체 안에 경로를 지정해주는 href 속성을 사용
// 사용자가 쿠팡을 선택했다면, location.href = "https://www.coupang.com" 결과값을 설정하면, 쿠팡사이트로 이동할 수 있습니다.

const mall = prompt(
  "즐겨찾는 쇼핑몰을 입력해주세요.",
  "쿠팡 / G마켓 / 11st / 마켓컬리"
);

if (mall !== null) {
  switch
}