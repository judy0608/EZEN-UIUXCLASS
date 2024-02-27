window.onload = () => {
  const randomNumber = Math.ceil(Math.random() * 5);
  // 아래처럼 응용가능
  // const bgArr = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];
  // const randomNumber = Math.ceil(Math.random() * bgArr.length);
  document.body.style.backgroundImage = `url(img/bg-${randomNumber}.jpg)`;
};
