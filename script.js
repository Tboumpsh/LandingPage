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
  /*
*DIV Father:
This demon contains all the elements that the menu needs.
Like:
*+Rightmenu
{
+logo
+4 (Link)
}
*+leftmenu
{
+Button
}
And all the elements that fall into these demons
  */
  let div = document.createElement("div");
  createID(div, "menu");
  // add in body
  document.body.prepend(div);
  // create Element
  /*
*Function of Element Making:
This function works by taking the type of element and the ID and the target element in which it appears.
+This function helps to simplify and clean the code.
    */
  function createNode(tagName, idName, targetDiv, text) {
    let divName = document.createElement(tagName);
    createID(divName, idName);
    targetDiv.append(divName);
    divName.textContent = text;
  }
  // create ID
  /**
   **Functioning ID:
This function can be made for all elements.
By taking the name of the element
And the name or value that ID gets
It creates an ideal element for you.
   * @param {divName} name 
   * @param {idName} ids 
   */
  function createID(name, ids) {
    name.id = ids;
  }
  // create element by function
  /**
   **Making Base Structure Menu:
   * It has two parts.
   * One section on the right and the other on the left, where the Logo is in the right * part, next to 4 links.
   */
  createNode("div", "rightMenu", div);
  createNode("div", "leftMenu", div);
  createNode("button", "", leftMenu, "click");
}
