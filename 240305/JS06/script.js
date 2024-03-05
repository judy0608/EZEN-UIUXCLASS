const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".play-pause");
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");
const progressCover = document.querySelector(".progress");
// console.log(playButton);

const videoPoint = (e) => {
  // console.log(e);
  const mouseX = e.pageX - player.offsetLeft;
  // console.log(mouseX);
  const width = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / width) * duration;
  video.currentTime = clickedTime;
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");

  const currentTime = video.currentTime;
  const duration = video.duration;
  const percent = (currentTime / duration) * 100;

  progressBar.style.width = `${percent}%`;
  // progressPointer.style.left = ;
  const progressBarWidth = progressCover.clientWidth;
  // console.log(progressBarWidth);
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.style.left = `${newPosition}px`;
};

const setRate = (e) => {
  // console.log(e);
  // const rate = e.target.dataset.rate;
  const { rate } = e.target.dataset; // *구조분해할당
  video.playbackRate = rate;
};

const formatting = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const setVolume = (e) => {
  // console.log(e);
  video.volume = e.target.value;
};

const play = () => {
  playButton.innerText = "⏸";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶️";
  video.pause();
};

const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});
progressCover.addEventListener("click", videoPoint);
