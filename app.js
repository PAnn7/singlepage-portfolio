"use strict";
$(".mywork").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: `<button type="button" class="btn btn-dark carousel-button-left slick-prev slide-arrow prev-arrow">
  <img src="./assets/icon-arrow-left.svg" alt="arrow-left" />
</button>`,
  nextArrow: `<button type="button" class="btn btn-dark carousel-button-right slick-next slide-arrow next-arrow">
  <img src="./assets/icon-arrow-right.svg" alt="arrow-right" />
</button>`,
});
// window.addEventListener("resize", function () {
//   if (window.matchMedia("(min-width: 991px)").matches) {
//     this.document.querySelector(".main-grid").classList.add("main-grid-width");
//   } else {
//     this.document
//       .querySelector(".main-grid")
//       .classList.remove("main-grid-width");
//   }
// });
