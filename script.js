console.log("works!");

const mainMenu = document.getElementById("main-menu");
const name = document.getElementById("name");

function toggleMenu() {
  mainMenu.classList.toggle("open");
}

function toggleHighlight(element) {
  element.classList.add("highlighted","1","2","3","4","5","6","7","8","9","10");
}

function wrapChars(element) {
  element.innerHTML = element.innerHTML
    .replace(
      /[^CW\s]/g,
      '<span  onmouseover="toggleHighlight(this)" class="hightlightable">$&</span>'
    )
    .replace(
      /[CW]/g,
      '<span onmouseover="toggleHighlight(this)" class="hightlightable highlighted 1 2 3 4 5 6 7 8 9 10">$&</span>'
    );
}


function wrapLetters(element) {
  element.innerHTML = element.textContent
    .replace(
      /[^&]/g,
      '<span  onmouseover="toggleHighlight(this)" class="hightlightable">$&</span>'
    )
}



wrapChars(name);
wrapLetters(degree);
wrapLetters(certificate);

function removeHighlight(){
  var highlighted_chars = document.getElementsByClassName("highlighted");
  for (let char of highlighted_chars) {
    // console.log(char.textContent)
    if (char.textContent == "!" || char.textContent == "!") {
      //do nothing
    } else {
      target = char.classList[char.classList.length - 1]
       switch (target) {
         case "10":
           char.classList.remove("10");
           console.log(char.classList)
           break;
         case "9":
           char.classList.remove("9");
           console.log(char.classList)
           break;
         case "8":
           char.classList.remove("8");
           console.log(char.classList)
           break;
         case "7":
           char.classList.remove("7");
           console.log(char.classList)
           break;
         case "6":
           char.classList.remove("6");
           console.log(char.classList)
           break;
         case "5":
           char.classList.remove("5");
           console.log(char.classList)
           break;
         case "4":
           char.classList.remove("4");
           console.log(char.classList)
           break;
         case "3":
           char.classList.remove("3");
           console.log(char.classList)
           break;
         case "2":
           char.classList.remove("2");
           console.log(char.classList)
           break;
         case "1":
           char.classList.remove("1");
           console.log(char.classList)
           break;
         default:
          console.log("should be deleted");
          char.classList.remove("highlighted");
           break;
       } 
      }   

  }
  console.log("running...")
    setTimeout(removeHighlight, 200);
}

removeHighlight();