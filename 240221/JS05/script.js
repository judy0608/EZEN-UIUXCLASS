// 사용자가 적은 값 불러오기 input 안에 value
// 등록 버튼 불러오기
// 리스트가 적힐 공간 불러오기
// 사용자가 할일을 적는다
// 사용자가 등록을 누른다 = li태그 생성? = 이벤트 만들기

// const userlist = document.querySelector("input[type=text]");
// console.log(userlist);
// const btn = document.querySelector("input[type=submit]");
// console.log(btn);
// const place = document.querySelector("ul");
// console.log(place);

// let pluslist = () => {
//   for
// };

// btn.onclick = pluslist;

// ========= 선생님 풀이 ========== //
// 1. 사용자가 입력하는 값을 찾아오기 위해 입력창에 대한 정의
// 2. 사용자가 클릭할 버튼에 대한 정의
// 3. 버튼을 클릭했을 때 이벤트에 대한 기능 정의 : 함수
// 4. li 태그를 DOM에서 생성
//    > 입력창을 통해 전달받은 값을 li 태그에 삽입
//    > li 태그를 ul 태그의 자식 요소로 만들기
// 5. 사용자가 입력한 값을 출력할 공간에 대한 정의
// *. 이벤트가 작동되면 이벤트 객체가 생성 > 무력화시키기 위해서 프리벤트디폴트 설정

const form = document.querySelector("form");
const input = document.querySelector("form input[type=text]");
const ul = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  // const text = input.value;
  // console.log(text);
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;
