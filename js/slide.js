// document.getElementById("next").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("formList").scrollLeft += widthItem;
//   };
//   document.getElementById("prev").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("formList").scrollLeft -= widthItem;
//   };

//   document.getElementById("for").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("form_List").scrollLeft += widthItem;
//   };
//   document.getElementById("pre").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("form_List").scrollLeft -= widthItem;
//   };

//   document.getElementById("forw").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("client_formList").scrollLeft += widthItem;
//   };
//   document.getElementById("pree").onclick = function () {
//     const widthItem = document.querySelector(".item").offsetWidth;
//     document.getElementById("client_formList").scrollLeft -= widthItem;
//   };

///////////////////OWL Carosuel///////////////////////////
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // nav:true,
    slideBy:2,
    autoplay:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    loop: true,
    margin: 10, 
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
