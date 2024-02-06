// jQuery 구현
// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("별로예요!" + '<img src="./img/star-lv1.png"/>');
//   } else if (starRate === 2) {
//     $(".print").html("보통이예요!" + '<img src="./img/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("그냥그래요!" + '<img src="./img/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("맘에들어요!" + '<img src="./img/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("아주좋아요!" + '<img src="./img/star-lv5.png"/>');
//   }
// });

// JavaScript 구현
const stars = document.querySelectorAll(".stars .fas");
// console.log(stars);
const print = document.querySelector(".print");
// console.log(print);
const imgs = [
  "./img/star-lv1.png",
  "./img/star-lv2.png",
  "./img/star-lv3.png",
  "./img/star-lv4.png",
  "./img/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (preStars) {
      preStars.classList.add("active");
    });

    const num = Array.from(stars).indexOf(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = '"별로예요!" <img src=${imgs[0]}>';
    } else if (starRate === 2) {
      print.innerHTML = '"보통이예요!" <img src=${imgs[1]}>';
    } else if (starRate === 3) {
      print.innerHTML = '"그냥그래요!" <img src=${imgs[2]}>';
    } else if (starRate === 4) {
      print.innerHTML = '"맘에들어요!" <img src=${imgs[3]}>';
    } else if (starRate === 5) {
      print.innerHTML = '"아주좋아요!" <img src=${imgs[4]}>';
    }
  });
});
