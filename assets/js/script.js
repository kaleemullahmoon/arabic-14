$(document).ready(function () {
  var one = $("#one");
  var two = $("#two");
  var three = $("#three");
  var four = $("#four");
  var five = $("#five");
  var six = $("#six");
  one.owlCarousel({
    // loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  two.owlCarousel({
    nav: true,
    autoplay: true,
    responsiveClass: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    margin: 10,
    dot: false,
    center: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  three.owlCarousel({
    responsiveClass: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    margin: 5,
    dot: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  four.owlCarousel({
    responsiveClass: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    margin: 5,
    dot: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  five.owlCarousel({
    // loop: true,
    margin: 5,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: false,
    dot:true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 6,
      },
    },
  });
  six.owlCarousel({
    // loop: true,
    margin: 5,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});
