document.getElementById("next").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
  };
  document.getElementById("prev").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem;
  };



  document.getElementById("for").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("form_List").scrollLeft += widthItem;
  };
  document.getElementById("pre").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("form_List").scrollLeft -= widthItem;
  };



  document.getElementById("forw").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("client_formList").scrollLeft += widthItem;
  };
  document.getElementById("pree").onclick = function () {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("client_formList").scrollLeft -= widthItem;
  };