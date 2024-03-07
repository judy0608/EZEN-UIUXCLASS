const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true);
// 데이터를 가져올 때 open 함수 사용. ("method", "데이터를 끌고 올 파일명", 동기&비동기)
xhr.send();

console.log(xhr);

const randerHTML = (students) => {
  let output = "";
  students.forEach((student) => {
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ul>
    <hr>
    `;
  });
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    // console.log(students);
    randerHTML(students);
  }
};
