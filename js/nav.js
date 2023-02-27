const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

////////////////////////////////


(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

