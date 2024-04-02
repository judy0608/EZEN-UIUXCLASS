import "./App.css";
import { useState } from "react";

// function App() {
//   console.log("Update");
//   const [count, setCount] = useState(0);
//   const onIncrease = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div className="App">
//       <h2>{count}</h2>
//       <button onClick={onIncrease}>+</button>
//     </div>
//   );
// }

// function App() {
//   const [text, setText] = useState("");
//   const handleOnChange = (e) => {
//     setText(e.target.value);
//   };
//   return (
//     <div>
//       <input value={text} onChange={handleOnChange}></input>
//       <div>{text}</div>
//     </div>
//   );
// }

// function App() {
//   const [date, setDate] = useState("");
//   const handleOnChange = (e) => {
//     console.log(e);
//     setDate(e.target.value);
//   };
//   return (
//     <div>
//       <input value={date} type="date" onChange={handleOnChange} />
//       <div>선택한 날짜는 {date} 입니다</div>
//     </div>
//   );
// }

// function App() {
//   const [option, setOption] = useState("");
//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//     setOption(e.target.value);
//   };
//   return (
//     <div>
//       <select value={option} onChange={handleOnChange}>
//         <option key={"1번"}>1번</option>
//         <option key={"2번"}>2번</option>
//         <option key={"3번"}>3번</option>
//       </select>
//     </div>
//   );
// }

// function App() {
//   const [text, setText] = useState("");
//   const handleOnChange = (e) => {
//     setText(e.target.value);
//   };
//   return (
//     <div>
//       <textarea onChange={handleOnChange}></textarea>
//       <div>{text}</div>
//     </div>
//   );
// }

function App() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}>성별</option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
