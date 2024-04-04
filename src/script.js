/**
 * import files
 */
import { user } from "./user.js";
import { publics } from "./public.js";
import { admin } from "./admin.js";
import { safir } from "./safir.js";
import { createMenuMobileP } from "./mobileP.js";
import { createMenuMobileA } from "./mobileA.js";
import { createMenuMobileU } from "./mobileU.js";
import { createMenuMobileS } from "./mobileS.js";

/** 
**Strategy:
Switch between different headers using a variable and case switch.
Because of the reproducibility in other parts of the site, we can manage the header with this strategy.
*/

/*
Creating a header for the 
*public
 and 
*user 
and 
*admin 
sections.
*/

// Building a flag that the menu you see depends on
let menu = "public";
/**
 * By specifying a variable and using the switch case structure, we can manually set when and what menu to display.
 * Just set the variable value with the name of the menu you want.
 */

switch (menu) {
  case "admin":
    admin();
    break;
  case "user":
    user();
    break;
  case "public":
    publics();
    break;
  case "safir":
    safir();
    break;
}

/**
 ** Animation of the motor movement is based on the position of the screen.
 ** That is, when the user reaches that level, the engine starts to move.
 ** We were able to do this by getting the sheight of the page and the definition of an animation for the object in question.
 ** We also used scroll to scroll.
 */

window.addEventListener("scroll", startAnimation);

function startAnimation() {
  let animationElement = document.getElementById("animationElement");
  let animationOffset = window.innerHeight * 2.93;

  if (getWindowOffsetTop(animationElement) > animationOffset) {
    animationElement.style.animation = "move 18s linear";
    // move is animation name
  }
}

function getWindowOffsetTop(element) {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

/**
 * This is a subscriber for the mobile menu.
 * And to adjust the mobile menu manually.
 * And this variable takes the name of the menus in Switch Case.
 */
let mobileMenu = "publicM";
/**
 * With this switch Case structure we can manually adjust the mobile menu.
 * We can display it by putting the name of each menu in the mobile menu variable.
 */
switch (mobileMenu) {
  case "adminM":
    createMenuMobileA();
    break;
  case "userM":
    createMenuMobileU();
    break;
  case "publicM":
    createMenuMobileP();
    break;
  case "safirM":
    createMenuMobileS();
    break;
}

/**
 * Selection of Switching buttons on mobile mode.
 * Tonrow site service cards.
 */
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let rowUp = document.getElementById("rowUp");
let rowDown = document.getElementById("rowDown");
/**
 ** Using Event to manage buttons.
 ** Clicking on each button will display a card and the other card will disappear.
 */
leftButton.addEventListener("click", function () {
  rowDown.style.display = "flex";
  rowUp.style.display = "none";
});
rightButton.addEventListener("click", function () {
  rowDown.style.display = "none";
  rowUp.style.display = "flex";
});

let pathB = document.getElementById("pathB");

pathB.addEventListener("click", () => {
  window.location.href = "#mainContent";
});
