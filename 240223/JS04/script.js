// 응용 예제 - 시간에 따라 이미지가 다르게 나타나도록 하기
// 오늘 지금 이시점의 시간 날짜 정보
const today = new Date();
const hrs = today.getHours();
// console.log(hrs);

const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src = hrs < 12 ? "./img/morning.jpg" : "./img/afternoon.jpg";
container.appendChild(newImg);

// 내장 객체 ! ?
