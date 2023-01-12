window.onscroll = function () {
  let nav = document.getElementById("nav");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav.style.padding = "20px";
  } else {
    nav.style.padding = "50px";
  }
};

let open = document.getElementById("navBtn");
let navCard = document.getElementById("m-menu");

open.onclick = function () {
  if (navCard.style.top != "90px") {
    navCard.style.top = "90px";
    open.style.transform = "rotate(90deg)";
  } else {
    navCard.style.top = "-200px";
    open.style.transform = "rotate(0)"

  }
};
