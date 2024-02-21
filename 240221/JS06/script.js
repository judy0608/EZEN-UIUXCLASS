// 사용자가 키와 몸무게를 입력한다.
// 사용자가 버튼을 클릭한다.
// 함수를 활용해 연산식 입력.
// 결과값을 도출해서 result 에 띄워준다.

// const height = document.querySelector("#height");
// // console.log(height);
// const weight = document.querySelector("#weight");
// // console.log(weight);
// const btn = document.querySelector("form");
// // console.log(btn);
// const result = document.querySelector(".result");
// // console.log(result);

// const calcFnc = () => {};

// form.onsubmit = calcFnc;

// ========== 선생님 풀이 =========== //

// 1. height 값, weight 값 정의하기
// 2. button, result 정의하기
// 3. button 클릭 시 이벤트 연산 작업하기
// 3-1. 위 값을 활용해서 연산 작업을 하고 특정한 변수에 할당해 줘야함
// 4. 연산작업 = 함수, 조건문 활용
// 5. 결과값을 result 에 출력하기

// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;

  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  // console.log("test");
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  if (weightInput.value !== "" && heightInput.value !== "") {
    // const heightValue = height.value;
    // const weightValue = weight.value;
    // const height = document.querySelector("#height").value / 100;
    // const weight = document.querySelector("#weight").value;
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    // console.log(height, weight);
    // console.log(height);

    // const bmiFnc = (weight, height) => {
    //   return (weight / (height * height)).toFixed(1);
    // };
    // console.log(bmiFnc);
    const bmi = calculate(weight, height);
    console.log(bmi);

    // const display = (bmi) => {
    //   let group;
    //   if (bmi >= 30.0) {
    //     group = "중등도 비만";
    //   } else if (bmi >= 25.0) {
    //     group = "경도비만";
    //   } else if (bmi >= 23.0) {
    //     group = "과체중";
    //   } else if (bmi >= 18.5) {
    //     group = "정상";
    //   } else {
    //     group = "저체중";
    //   }
    //   result.innerText = `${bmi} -> ${group} 입니다.`;
    // };

    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
