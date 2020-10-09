console.log("works!");

const mainMenu = document.getElementById("main-menu");
const name = document.getElementById("name");

function toggleMenu() {
  mainMenu.classList.toggle("open");
}

function toggleHighlight(element) {
  element.classList.toggle("highlighted");
}

function countChars(element) {
  element.innerHTML = element.innerHTML
    .replace(
      /[^CW\s]/g,
      '<span  onmouseover="toggleHighlight(this)" class="hightlightable">$&</span>'
    )
    .replace(
      /[CW]/g,
      '<span onmouseover="toggleHighlight(this)" class="hightlightable highlighted">$&</span>'
    );
}
countChars(name);
// countChars(degree);
