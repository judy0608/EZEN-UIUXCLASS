// console.log("시작");
// add();
// console.log("실행 중...");
// console.log("끝");

// 사용자에게 에러 메세지 전달하기.
// 예외조항처리

// try {
//   // 실행하고자 하는 모든 것 작성.
//   console.log("시작");
//   add(); // 정의되지 않은 함수로 인해 에러가 발생 되면 참조변수로 catch함수에 전달.
//   console.log("싫행 중...");
// } catch (err) {
//   // catch()는 에러를 맡아서 담당.
//   console.log(`오류 발생 : ${err}`);
//   console.log(`오류 발생 : ${err.name}`);
//   console.log(`오류 발생 : ${err.message}`);
//   // 에러 메세지는 name과 message로 구성되어 있다.
// } finally {
//   console.log("끝");
// }

const json = '{"grade":3, "age":25}';

try {
  const user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다.";
    // throw : 에러 메세지를 직접 커스텀 할 수 있다.
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("통신완료");
}
