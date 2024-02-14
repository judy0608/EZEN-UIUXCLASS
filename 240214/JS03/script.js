// 1. 사용자가 입력한 소비자가를 찾아온다
// 2. 사용자가 입력한 할인률 값을 찾아온다
// 3. 사용자가 "할인 가격 계산하기" 버튼을 클릭한다면, 이벤트가 작동할 수 있도록 해준다.
// 4. 계산 이벤트를 정의 해준다.
// 5. "할인된 가격 출력" 공간에 계산된 값을 출력시켜준다.

const originPrice = document.querySelector("#price").value;
const rate = document.querySelector("#rate").value;
const btn = document.querySelector("#btn");
const showResult = document.querySelector("#showResult");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const originPrice = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;
  showResult.innerHTML = `상품의 원래 가격은 ${originPrice}이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다!`;
});
