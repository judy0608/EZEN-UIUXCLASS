// 자바스크립트로 비디오 컨트롤 //

const button = document.querySelector("button");

togglePlay = () => {
  // console.log("toggle");
  const video = document.querySelector("video");
  if (video.paused) {
    button.innerText = "Pause";
    video.play(); //영상을 재생시키는 함수
  } else {
    button.innerText = "Play";
    video.pause(); //영상을 일시정지 시키는 함수
  }
};

button.addEventListener("click", togglePlay);
