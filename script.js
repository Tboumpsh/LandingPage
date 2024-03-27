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

let contains = document.getElementById("parent");

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
  contains.prepend(div);
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

  // create image
  /**
   * I used an IMG element to build Logo.
   *  Then I use setAttribute to href and link the desired image.
   */
  let img = document.createElement("img");
  rightMenu.append(img);
  img.setAttribute(
    "src",
    "https://pixlr.com/images/index/ai-image-generator-two.webp"
  );

  // create menu item a
  createA("خانه", "درخواست سفیر", "درخواست خرید", "تماس با ما");

  // function create a menu
  /**
   * Function Make Menu Links:
   * In this function, it puts them into one presentation by taking two inputs
   * The Code of a Loop to Create Four Links. In Each It of the Loop, a new link element is creating the JavaScript createElement Function. The link element is then added to the webpage, Specification to the Rightmenu. The Text Content of the Link is Set to One of the Input Values, in Order. So, the first link will show the value of @param {a} home
   * the second link will show of @param {a} requestS
   * the first link will show the value of @param {a} requestSHOP
   * and the first link will show the value of @param {a} call.
   */
  function createA(home, requestS, requestSHOP, call) {
    let values = [home, requestS, requestSHOP, call];

    for (let i = 0; i <= 3; i++) {
      let link = document.createElement("a");
      rightMenu.append(link);
      link.textContent = values[i % 4];
      link.setAttribute("href", "#");
    }
  }
  /**
   * Return the DIV value of the father where all the elements are in
   */
  return div;
}

// user menu
/**
 * The page that the user sees after login.
 * On this page, the menu has two buttons on the left, and the only difference is with the Published Function. This function is for UserPage.
 */
function user() {
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
  contains.prepend(div);
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
  createNode("button", "", leftMenu, "click");

  // create image
  /**
   * I used an IMG element to build Logo.
   *  Then I use setAttribute to href and link the desired image.
   */
  let img = document.createElement("img");
  rightMenu.append(img);
  img.setAttribute(
    "src",
    "https://pixlr.com/images/index/ai-image-generator-two.webp"
  );

  // create menu item a
  createA("خانه", "درخواست سفیر", "درخواست خرید", "تماس با ما");

  // function create a menu
  /**
   * Function Make Menu Links:
   * In this function, it puts them into one presentation by taking two inputs
   * The Code of a Loop to Create Four Links. In Each It of the Loop, a new link element is creating the JavaScript createElement Function. The link element is then added to the webpage, Specification to the Rightmenu. The Text Content of the Link is Set to One of the Input Values, in Order. So, the first link will show the value of @param {a} home
   * the second link will show of @param {a} requestS
   * the first link will show the value of @param {a} requestSHOP
   * and the first link will show the value of @param {a} call.
   */
  function createA(home, requestS, requestSHOP, call) {
    let values = [home, requestS, requestSHOP, call];

    for (let i = 0; i <= 3; i++) {
      let link = document.createElement("a");
      rightMenu.append(link);
      link.textContent = values[i % 4];
      link.setAttribute("href", "#");
    }
  }
  /**
   * Return the DIV value of the father where all the elements are in
   */
  return div;
}

// Admin menu
/**
 * This menu is management.
 * It is related to management and tasks and access that the administrator has.
 * In this section, the menu can scroll down on the pages by clicking on the item.
 */
function admin() {
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
  contains.prepend(div);
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
  createNode("button", "", leftMenu, "click");

  // create image
  /**
   * I used an IMG element to build Logo.
   *  Then I use setAttribute to href and link the desired image.
   */
  let img = document.createElement("img");
  rightMenu.append(img);
  img.setAttribute(
    "src",
    "https://pixlr.com/images/index/ai-image-generator-two.webp"
  );

  // create menu item a
  createA(
    "خانه",
    "داشبورد",
    "مدیریت سفارشات",
    "مدیریت سفیران",
    "لیست جابجایی ها"
  );

  // function create a menu
  /**
   * Function Make Menu Links:
   * In this function, it puts them into one presentation by taking two inputs
   * The Code of a Loop to Create Four Links. In Each It of the Loop, a new link element is creating the JavaScript createElement Function. The link element is then added to the webpage, Specification to the Rightmenu. The Text Content of the Link is Set to One of the Input Values, in Order. So, the first link will show the value of @param {a} home
   * the second link will show of @param {a} requestS
   * the first link will show the value of @param {a} requestSHOP
   * and the first link will show the value of @param {a} call.
   */
  function createA(home, dashboard, managementShop, managementS, lists) {
    let values = [home, dashboard, managementShop, managementS, lists];

    for (let i = 0; i <= 3; i++) {
      let link = document.createElement("a");
      rightMenu.append(link);
      link.textContent = values[i % 4];
      link.setAttribute("href", "#");
    }
  }
  /**
   * Return the DIV value of the father where all the elements are in
   */
  return div;
}

// Safir menu
/**
 * These pages are for ambassadors who are escaping to move a package or accept a custom.
 * Only ambassadors have access to this page and this section makes the ambassadors menu.
 */
function safir() {
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
  contains.prepend(div);
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
  createNode("button", "", leftMenu, "click");

  // create image
  /**
   * I used an IMG element to build Logo.
   *  Then I use setAttribute to href and link the desired image.
   */
  let img = document.createElement("img");
  rightMenu.append(img);
  img.setAttribute(
    "src",
    "https://pixlr.com/images/index/ai-image-generator-two.webp"
  );

  // create menu item a
  createA("خانه", "درخواست ها", "کلاب من", "اطلاعیه");

  // function create a menu
  /**
   * Function Make Menu Links:
   * In this function, it puts them into one presentation by taking two inputs
   * The Code of a Loop to Create Four Links. In Each It of the Loop, a new link element is creating the JavaScript createElement Function. The link element is then added to the webpage, Specification to the Rightmenu. The Text Content of the Link is Set to One of the Input Values, in Order. So, the first link will show the value of @param {a} home
   * the second link will show of @param {a} requestS
   * the first link will show the value of @param {a} requestSHOP
   * and the first link will show the value of @param {a} call.
   */
  function createA(home, request, myClub, notif) {
    let values = [home, request, myClub, notif];

    for (let i = 0; i <= 3; i++) {
      let link = document.createElement("a");
      rightMenu.append(link);
      link.textContent = values[i % 4];
      link.setAttribute("href", "#");
    }
  }
  /**
   * Return the DIV value of the father where all the elements are in
   */
  return div;
}
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
    public();
    break;
  case "safir":
    safir();
    break;
}
