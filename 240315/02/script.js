// 1. 처음 데이터가 생성되면 todo
// 2. 드래그 & 드롭 기능
// - todo: 객체들을 담을 수 있어야 함
// - doing: 객체들을 담을 수 있어야 함
// - done: 객체들을 담을 수 있어야 함
// 3. 웹 브라우저 안에서 드래그 & 드롭 기능을 사용하려면 반드시 draggable의 속성값이  존재한다. = true

const form = document.querySelector("form");
const blocks = document.querySelectorAll(".list");

let from,
  to = undefined;

let todoList = [];
let doingList = [];
let doneList = [];
// let todoList = [], doingList = [], doneList = [];
// 데이터 값이 중복되지 않도록 배열을 하나로 묶어줘야 함.
const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};

const dragstart = (e) => {
  from = e.target.parentElement.id;
};

const dragover = (e) => {
  // console.log(e);
  const { id: targetId } = e.target;
  const listIds = Object.keys(lists);

  console.log(listIds, targetId);

  if (listIds.includes(targetId)) {
    to = targetId;
  }
};

const dragend = (e) => {
  // console.log(e.target);
  const { id } = e.target;

  if (from === to) {
    return;
  }

  e.target.remove();
  lists[from] = lists[from].filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      createElement(to, todo);
    }
  });

  saveList(from);
  saveList(to);
};

const removeTodo = (e) => {
  e.preventDefault();
};

const createElement = (listId, todo) => {
  // list는 item을 담을 div태그를 가져옴!
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement("div");

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;

  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  item.addEventListener("contextmenu", removeTodo);

  list.appendChild(item);
  lists[listId].push(todo);
};

const createTodo = (e) => {
  e.preventDefault();

  const input = document.querySelector("input[type='text']");

  // id값 생성 방법 2가지
  const id = String(Date.now());
  // const id = uuidv4();

  const newTodo = {
    id,
    text: input.value,
  };

  console.log(newTodo);
  createElement("todo", newTodo);
  input.value = "";
  saveList("todo");
};

const loadList = () => {
  const userTodoList = JSON.parse(localStorage.getItem("todo"));
  const userDoingList = JSON.parse(localStorage.getItem("doing"));
  const userDoneList = JSON.parse(localStorage.getItem("done"));

  if (userTodoList) {
    userTodoList.forEach((todo) => {
      createElement("todo", todo);
    });
  }

  if (userDoingList) {
    userDoingList.forEach((doing) => {
      createElement("doing", doing);
    });
  }

  if (userDoneList) {
    userDoneList.forEach((done) => {
      createElement("done", done);
    });
  }
};

form.addEventListener("submit", createTodo);
blocks.forEach((block) => {
  block.addEventListener("dragover", dragover);
});
