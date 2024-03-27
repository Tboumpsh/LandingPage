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

// create public menu
function public() {
  // create main div
  let div = document.createElement("div");
  createID(div, "menu");
  // add in body
  document.body.prepend(div);
  
}
