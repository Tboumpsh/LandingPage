/**
 * import files
 */
import { user } from "./user.js";
import { publics } from "./public.js";
import { admin } from "./admin.js";
import { safir } from "./safir.js";
import { getImage } from "./createImage.js";

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
  console.log(window.innerHeight);

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

// call function getImage
getImage(0, "/images/Green-refahlogo.png", "/images/refahlogo.png");
getImage(1, "/images/OrangDigakala.png", "images/digikala.png");
getImage(2, "/images/shilaOrang.png", "images/shilal.png");
getImage(3, "/images/GreenZiKhorak.png", "images/zikhoraklogo.png");
getImage(4, "/images/RedCleanFood.png", "images/cleanfood.png");
getImage(5, "/images/PerpelSib.png", "images/sib.png");
