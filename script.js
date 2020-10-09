console.log("works!");

const mainMenu = document.getElementById("main-menu");
const name = document.getElementById("name");

function toggleMenu() {
  mainMenu.classList.toggle("open");
}

function countChars(element) {
  element.innerHTML = element.innerHTML
    .replace(/\w[^CW]/g, '<span class="hightlightable">$&</span>')
    .replace(/[CW]/g, '<span class="hightlightable highlighted">$&</span>')
    .replace(/\s/g, " ");
}
countChars(name);
// countChars(degree);
