const themeSelect = document.getElementById("theme-select");

// function to set page theme
function setTheme(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    document.getElementById('bgColor').textContent = "Background color is " + bgColor;
    document.getElementById('textColor').textContent = "Text color is " + textColor;

}

//Light is default theme
document.getElementById('theme-light').classList.add('theme-clicked');

// Adding event listeners for all theme buttons in custom dropdown
var themeBtns = document.getElementsByClassName('theme');
// iterate through buttons
for(let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', event => {
        // Remove border from currenty selected theme
        for(let j = 0; j < document.getElementsByClassName('theme-clicked').length; j++) {
            let currentEl = document.getElementsByClassName('theme-clicked')[j];
            currentEl.textContent = currentEl.textContent.replace(" ✓", "");
            currentEl.classList.remove('theme-clicked');
            
        }
        event.target.classList.add('theme-clicked');
        event.target.textContent += " ✓";

        switch (event.target.id) {
            case "theme-light":
              console.log("Light Theme");
              // calls set theme function with appropriate colors
              setTheme('white', 'black');
              break;
            case "theme-dark":
              console.log("Dark Theme");
              setTheme('#202020', 'white', 'white', '#5D5D5D');
              break;
            case "theme-soft":
              console.log("Soft Theme");
              setTheme('#98C1D9', '#303036');
              break;
            case "theme-vibrant":
              console.log("Vibrant Theme");
              setTheme('purple', 'pink');
              break;
          }
    });
}

// predefined urls for images
const imgs = ["resources/torchic.png", "resources/combusken.png", "resources/blaziken.png"];
let index = 0;
let spin = 0;

document.getElementById('change-btn').addEventListener('click', event => {
    console.log("changing img");
    index += 1;

    // modulus operator to loop back through images
    document.getElementById('pokemon').src = imgs[index%3];

    // spin it another 360deg each button press
    spin += 360;

    // spin image
    document.getElementById('pokemon').style.webkitTransitionDuration = "1s";
    document.getElementById('pokemon').style.webkitTransform = "rotate(" + spin + "deg)";
});
