// 스크롤이라는 이벤트 필요,,
// 스크롤을 담당 = 윈도우

const scrollEvent = () => {
  // console.log("scroll");
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollEvent);

// 마우스 & 손가락
// click : 마우스가 클릭했다가 떼는 순간 이벤트 발생.
// mousedown & touchstart
// 컴퓨터 or 모바일 디바이스는 사용자가 얼만큼 스크롤을 했는지 어떻게 알 수 있을까?

// scrollWidth : 사용자가 스크롤 할 수 있는 컨텐츠의 전체 총 너비값
// clientWidth : 사용자의 눈으로 확인이 가능한 디바이스 매체상의 너비값
// scrollWidth - clientWidth = 스크롤을 할 수 있는 너비값

// 사용자가 처음으로 스크롤을 하기 위해서 커서를 찍은 지점
let startX = 0;
// 사용자가 스크롤을 한 이후 손가락을 뗸 지점 = 종착지점
let nowX = 0;

// 사용자가 스크롤을 통해서 이동한 만큼의 너비
let listX = 0;

// 두번째로 스크롤을 움직이고자 할 떄, 세팅되어야 하는 위치값
// listX + nowX - startX

const hashContent = document.querySelector(".hashcontent");
const listScrollWidth = hashContent.scrollWidth;
const listClientWidth = hashContent.clientWidth;
// console.log(listScrollWidth);
// console.log(listClientWidth);
const minus = listClientWidth - listScrollWidth;
// console.log(minus);

const getClientX = (e) => {
  const isTouches = e.toushes ? true : false;
  return isTouches ? e.touches[0].ClientX : e.ClientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
  return parseInt(
    window.getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  console.log("종착지점: ", nowX);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }
  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchend", onScrollEnd);

  setTimeout(() => {
    bindEvents();
    hashContent.style.transition = "";
  }, 100);
};

const onScrollStart = (e) => {
  // console.log("scrollStart");
  startX = getClientX(e);
  console.log("스타트지점: ", startX);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mouseup", onScrollEnd);
  window.addEventListener("touchend", onScrollEnd);
};

const bindEvents = () => {
  hashContent.addEventListener("mousedown", onScrollStart);
  hashContent.addEventListener("touchstart", onScrollStart);
};

bindEvents();
