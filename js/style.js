window.addEventListener("load", function () {
  var bt = document.getElementsByClassName("menu-bt")[0];
  var menu = document.getElementsByClassName("mb-menu")[0];

  bt.addEventListener("click", function () {
    if (menu.style.opacity == "1") {
      menu.style.opacity = "0";
    } else {
      menu.style.opacity = "1";
    }
    console.log("Clicked");
  });

  function changeimg(x) {
    if (x.matches) {
      // If media query matches
      let imgcls = document.getElementsByClassName("gal-img")[0];
      imgcls.src = "./images/desktop/image-gallery-milkbottles.jpg";
      imgcls = document.getElementsByClassName("gal-img")[1];
      imgcls.src = "./images/desktop/image-gallery-orange.jpg";
      imgcls = document.getElementsByClassName("gal-img")[2];
      imgcls.src = "./images/desktop/image-gallery-cone.jpg";
      imgcls = document.getElementsByClassName("gal-img")[3];
      imgcls.src = "./images/desktop/image-gallery-sugarcubes.jpg";
    }
  }

  var x = window.matchMedia("(min-width: 375px)");
  changeimg(x); // Call listener function at run time
  x.addListener(changeimg);
});
