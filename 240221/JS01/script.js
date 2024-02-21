// const major = document.querySelector("#major");
// // console.log(major.options);
// const displaySelect = () => {
//   const selectedText = major.options[major.selectedIndex].innerText;
//   // console.log(selectedText);
//   alert(`${selectedText}를 선택했습니다!`);
// };
// major.onchange = displaySelect;

// const subject = document.testForm.subject;
// // console.log(subject);

const checked = document.querySelector("input[name='subject']:checked");
// 큰 따옴표 안에는 작은 따옴표만 가능
console.log(checked);
