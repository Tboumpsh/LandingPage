let contains = document.getElementById("parent");
/**
 *
 */
export function createMenuMobileS() {
  // Create main elements
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const main = document.createElement("div");
  main.id = "main";

  const openSidebarBtn = document.createElement("div");
  openSidebarBtn.classList.add("hamburger");
  openSidebarBtn.id = "openSidebar";
  openSidebarBtn.textContent = "\u2630";

  const overlay = document.createElement("div");
  overlay.id = "overlay";

  let ul = document.createElement("ul");
  sidebar.append(ul);

  /**
   *
   * @param {The number of li} amount
   * @param {The first menu item} a
   * @param {The secund menu item} b
   * @param {The three menu item} c
   * @param {The four menu item} d
   * @param {The five menu item} e
   */
  function generateList(amount, a, b, c, d, e) {
    // Get the ul element

    // Loop through the amount and create li elements with a tags
    for (let i = 1; i <= amount; i++) {
      // Create li element
      const li = document.createElement("li");

      // Create a element
      const aElement = document.createElement("a");

      // Set the text of the a tag to one of the three inputs
      /**
       *
       */
      switch ((i - 1) % 5) {
        case 0:
          aElement.textContent = a;
          break;
        case 1:
          aElement.textContent = b;
          break;
        case 2:
          aElement.textContent = c;
          break;
        case 3:
          aElement.textContent = d;
          break;
        case 4:
          aElement.textContent = e;
          break;
      }

      aElement.setAttribute("href", "#");

      // Append the a tag to the li
      li.appendChild(aElement);

      // Append the li to the ul
      ul.appendChild(li);
    }
  }
  // Call the function with the desired amount
  generateList(
    5,
    "خانه",
    " داشبورد",
    "درخواست سفیر",
    "درخواست خرید",
    "خروج از حساب"
  );

  //

  // Append main elements to the body
  contains.appendChild(sidebar);
  contains.appendChild(main);
  main.appendChild(openSidebarBtn);
  contains.appendChild(overlay);

  const openSidebar = () => {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    contains.style.overflow = "hidden"; // Prevent scrolling
    if ((sidebar.style.right = "0")) {
      openSidebarBtn.style.zIndex = " 0";
    }
  };

  const closeSidebar = () => {
    sidebar.style.right = "-250px";
    overlay.style.display = "none";
    contains.style.overflow = "auto"; // Allow scrolling
    document.removeEventListener("click", closeSidebar); // Remove the event listener
  };

  openSidebarBtn.addEventListener("click", openSidebar);

  overlay.addEventListener("click", closeSidebar);
}

createMenuMobileS();
