// 원기둥의 부피 공식 : 밑 면적 * 높이
// 밑 면적 = 파이 Math.PI * ((지름/2)제곱)

// 생성자 함수 혹은 class 활용

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${sylinder.getVolume()}입니다.`);

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * thisHeight).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click");
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  // 함수를 활용하여 값을 구할때 공백의 오류 상황을 방지하기 위해 if문을 활용
  if (diameter === "" || height === "") {
    result.innerText = "지금 값과 높이 값을 입력하세요!";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`;
  }
});
//  *형변환 중요
