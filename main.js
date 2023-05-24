//home
document.addEventListener("DOMContentLoaded", function () {
  let menuOptions = document.querySelectorAll(".menu-option");
  activateMenuOption("bttn-1");

  menuOptions.forEach(function (menuOption) {
    let radioBtn = menuOption.querySelector("input[type='radio']");
    let userInteraction = false;

    radioBtn.addEventListener("click", function () {
      userInteraction = true;
    });

    radioBtn.addEventListener("change", function () {
      menuOptions.forEach(function (otherMenuOption) {
        otherMenuOption.classList.remove("bttn-selected");
      });

      if (userInteraction) {
        scrollToPosition(radioBtn.id);
        userInteraction = false;
      } else if (radioBtn.checked) {
        activateMenuOption(radioBtn.id);
        scrollToPosition(radioBtn.id);
      }
    });
  });

  function activateMenuOption(radioId) {
    menuOptions.forEach(function (menuOption) {
      let radioBtn = menuOption.querySelector("input[type='radio']");
      let menuText = menuOption.querySelector(".menu-text");

      if (radioBtn.id === radioId) {
        radioBtn.checked = true;
        menuOption.classList.add("bttn-selected");
        menuText.style.display = "flex";
      } else {
        radioBtn.checked = false;
        menuOption.classList.remove("bttn-selected");
        menuText.style.display = "none";
      }
    });
  }

  function scrollToPosition(radioId) {
    let scrollPosition = 0;

    if (radioId === "bttn-1") {
      scrollPosition = 0;
    } else if (radioId === "bttn-2") {
      scrollPosition = window.innerHeight * 2;
    } else if (radioId === "bttn-3") {
      scrollPosition = window.innerHeight * 4;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  }

  document.addEventListener("scroll", function () {
    let scrY = window.scrollY;
    const innerHeight = window.innerHeight;

    if (scrY <= innerHeight * 1.5) {
      activateMenuOption("bttn-1");
    } else if (scrY <= innerHeight * 3.5) {
      activateMenuOption("bttn-2");
    } else {
      activateMenuOption("bttn-3");
    }
  });
});
//login
//settings
