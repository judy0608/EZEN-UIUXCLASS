// 오늘 친구들과 같이 밥을 먹기로
// 메뉴 후보 : 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 한가지 메뉴를 랜덤으로 선택해서 웹브라우저에 출력될 수 있도록 코드를 작성해보세요.

// const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
// const menuNum = Math.ceil(Math.random() * menu.length);

// ====== 선생님 풀이 ======= //
const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random() * menu.length);
// 배열은 인덱스값을 갖기 때문에 소수점을 올리지않고 빼준다.
const result = menu[menuNum];
document.write(result);
// 변수값만 출력할 때는 빽틱이나 큰따옴표를 안넣는다.
