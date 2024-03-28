import { user } from "./user.js";
import { publics } from "./public.js";
import { admin } from "./admin.js";
import { safir } from "./safir.js";

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

admin();
publics();
user();
console.log(user());
safir();

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
