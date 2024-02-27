// 입력공간, 등록버튼, 출력공간 선언
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
// console.log(form); // 정상적으로 선언되었는지 확인

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //경로 막아놓기
//   // console.log("click"); // 프리벤트디폴트가 정상 작동되는지 확인
//   // 빈 문자열에서 등록을 누르면 이벤트가 실행되지않도록 설정해주기 (if 문)
//   if (input.value !== "") {
//     // 만약에 인풋에 값이 공백이 아니라면 (부정의 부정 = 긍정)
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     // 인풋 텍스트 벨류값을 이벤트가 실행되고 나면 리셋시키기
//     input.value = "";
//   }
// });

// 위의 코드를 아래처럼 분업화해서 쓸 수 있다.

// const addItem = (text) => {
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = text;
//     ul.appendChild(li);
//   }
// };
// const handler = (e) => {
//   e.preventDefault();
//   addItem(input.value);
//   input.value = "";
// };
// form.addEventListener("submit", handler);

// 리팩토링이 되었다.?

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
// JSON : JavaScript Object Notation의 약자, 브라우저와 서버사이에서 오고가는 데이터의 형식
// JSON 은 반드시 키 값에 큰따옴표가 붙는다 !!!
// JSON.stringify() : 웹언어와 서버언어는 다르기때문에 중간에 변환시켜줘야 한다.

// 삭제 버튼과 기능 추가하기.
// 삭제 버튼의 부모를 찾아와서 부모를 통채로 없애야한다. li태그.

const delItem = (e) => {
  e.preventDefault();
  const target = e.target.parentElement;
  // console.log(target);
  todos = todos.filter((todo) => todo.id != target.id);
  // 삭제한 목록의 아이디 값을 제외한 나머지 목록의 아이디 값을 재배열(=재할당)시켜서 삭제 효과를 준다.
  // 재할당을 해줘야하기 때문에 변수값은 const가 아닌 let을 사용해야한다.
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  // console.log(todos);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  // console.log(userTodos);

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  } // 값을 찾아올 수 없다는 오류 생성 가능성이 있어서 일부러 else{handler()}로 빈배열을 넣어줌.
  todos = userTodos;
};

init();

form.addEventListener("submit", handler);
