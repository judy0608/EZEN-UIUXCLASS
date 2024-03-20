const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// mouse 이동 시, 최종 좌표값 = page X, Y
let X = 0,
  Y = 0;

// mouse 이동 전, 좌표 값
let targetX = 0,
  targetY = 0;

// mouse 이동 전, 후 아이콘의 속도 비율
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `X : ${x} Y : ${y}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";

  window.requestAnimationFrame(loop);
};

loop();
