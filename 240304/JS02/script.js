// 문자열 + 메서드
// 문자열의 값을 배열의 값으로 전환시키는 메서드 함수

// 외부에서 가져오는 값 = JSON / 문자열
// 외부에서 들어오는 값 = 사용자가 직접 입력한 값 || 서버 안에 호스팅 값

// 배열
// DOM => FE & UIUX PB
// HTML => NodeList => 배열(유사배열)의 형태

// // 문자열을 배열로 전환
// // split() : 문자열을 특정 구분자로 나눠서 배열의 아이템으로 전환하는 메서드 함수.
// const str5 = "Hello, everyone";
// const array2 = str5.split("");
// console.log(array2);

// // [...str] : 전개연산자 구문을 활용해서 배열로 전환하는 방법. * 가장 많이 사용
// const array3 = [...str5];
// console.log(array3);

// // Array.from(문자열) : Array 프로토타입을 활용해서 배열로 전환하는 방법. 보통 유사배열화 시킬때 많이 사용.
// const array4 = Array.from(str5);
// console.log(array4);

// // 배열을 문자열로 전환
// // join()
// const str6 = array4.join("");
// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요");

// // const firstCh = string[0].toUpperCase();
// // const remainStr = string.slice(1);
// // const result = firstCh + remainStr;

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");

// document.write(result);
