// 마우스의 움직임에 따라서 좌표 값이 변경되고 있다는 사실을 컴퓨터가 알아야한다.
// 좌표값을 확인하는 방법 : window 객체 안에 포함되어있는 이벤트 활용
// clientX : 74
// -> 스크롤을 인식하지 않은 상태에서 단순히 웹 브라우저 상의 마우스의 위치값을 계속 반환
// pageX : 74
// -> 웹페이지를 스크롤하게 되면 값이 바뀐다.
// -> 만약 스크롤이 발생될 수 밖에 없는 페이지 안에서 스크롤이 내려가는 상황에서도 나의 x 혹은 y 좌표값을 찾아오고 싶다면, 반드시 pageX, pageY 속성값을 사용해야 한다.
// screenX : -823

// 현재 마우스가 위치해있는 좌표값
// 이동 후 마우스가 위치해있는 좌표값
// 현재 좌표값 -> 이동 후 좌표값 속도 비율 -> 1 : 1

const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.1;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  // targetX += (x - targetX) * speed;
  // targetY += (y - targetY) * speed;

  // cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();
