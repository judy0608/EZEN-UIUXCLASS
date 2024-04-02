const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, (Math.PI / 180) * 360);

ctx.fillStyle = "green";
ctx.stroke(triangle);
ctx.fill(circle);

// 곡선 //

// 타원 //

// ctx.strokeStyle = "blue";
// ctx.scale(1, 0.7);
// ctx.beginPath();
// ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();

// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// ctx.stroke();
// x,y, 가로반지름, 세로반지름, 각도 ,각도, 각도
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, (Math.PI / 180) * 360);
// ctx.stroke();

// 반원 //
// ctx.fillStyle = "red";

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.closePath();
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.stroke();
// ctx.closePath();

// ctx.strokeStyle = "blue";

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();
// ctx.stroke();

// 원 //

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";
// // 스타일을 선언하고나서 함수로 실행시켜야 화면상에 나ㄷ타난다

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true); // 중심점 x축, y 축, 반지름, 0도에서 시작, ~ 각도360, 방향 true=반시계방향)
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// 삼각형 //

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// // ctx.lineTo(50, 50);
// ctx.closePath(); // 종결시키기
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100); // 시작점 찍기
// ctx.lineTo(250, 50); // 선 긋기
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(0,200,0)"; // 색상 정하기
// ctx.fill(); // 색상 칠하기
// ctx.stroke(); // 선 그리기

// 사각ㅎ형

// ctx.beginPath(); // 선언부
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke(); // 종결부

// ctx.fillStyle = ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.fillRect(10, 10, 50, 100);

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

// // JS 세계관
// // 시간: 1초 = 1000 밀리초
// // 각도: 1도 45도
// // 래디언: 1 = 180px

// const radians = (Math.PI / 180) * 180;
