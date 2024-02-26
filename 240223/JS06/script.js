// 제목 값 불러오기
// 저자 값 불러오기
// 취소하기 저장하기 버튼 불러오기
// 출력공간 불러오기
// 제목 - 저자 순으로 입력한 값을 출력
// 삭제 버튼 불러오기 span

// const title = document.querySelector("#title");
// const auther = document.querySelector("#auther");
// const saveBtn = document.querySelector("input[type=submit]");
// const resetBtn = document.querySelector("input[type=reset]");
// const saveSpace = document.querySelector("#bookList");

// console.log();

// saveBtn.addEventListener("click", () => {
//   const title = document.querySelector("#title").value;
//   const auther = document.querySelector("#auther").value;
//   saveSpace.appendChild();
// });
// `${title} - ${auther}`;

// ========== 선생님 풀이 ========== //
// 1-1. 제목과 저자의 값을 정의한다.
// 1-2. input > .value 값 찾아오기
// 2. 출력할 공간에 대한 정의. queryselector
//    form -> submit  html에서 폼태그를 사용했기때문에 이게 정석.
//    button -> click
// 2-2. 이벤트가 작동하도록 해주는 저장하기 버튼 정의 e.preventDefault()
// 3. 찾아온 값을 출력해주도록 해주는 이벤트 함수가 필요하다. addEventListener
// 4. 삭제하기 버튼 정의한다. creareElement / appendChild
// 5. 삭제하기 버튼 클릭 시, 목록 삭제 이벤트 함수 필요. parentNode / remeveChild
// 6. 삭젷하기 버튼이 복수의 갯수로 생성 => 반복문을 사용ㅎ해서 클릭한 삭제 버튼을 찾아오기 위해서 => this (*클래스 함수 vs 화살표 함수)
// 7. 삭제하기 버튼 클릭시 목록삭제 이벤트 함수. parentNode / remeveChild

// const title = document.querySelector("#title");
// const auther = document.querySelector("#auther"); 이벤트 안으로 이동
const save = document.querySelector("form");
const booklist = document.querySelector("#booklist");
// console.log();

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const auther = document.querySelector("#auther");
  e.preventDefault();
  // console.log("click");
  const li = document.createElement("li");
  li.innerHTML = `${title.value} - ${auther.value} <span>삭제</span>`;
  bookList.appendChild(li);
  title.value = "";
  auther.value = "";

  const delbuttons = document.querySelectorAll("span");
  for (let delbutton of delbuttons) {
    delbutton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      // this(=span)의 부모의 부모요소를 찾아 자식을 삭제시켜준다. *체이닝기법
      // this를 쓰려면 화살표 함수를 못쓰기 때문에 function으로 사용.
    });
  }
});
