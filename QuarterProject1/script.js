// Tyler Smith, 10/14/20, Quarter Project 1, Web Technologies
const canvas = document.getElementById('car-canvas');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const dateInput = document.getElementById('date-input');
// set date min to current date
var d = new Date();
var minDate = new Date();
minDate.setDate(d.getDate()+1);
// max of 20 days
var maxDate = new Date();
maxDate.setDate(d.getDate()+20);
// String padStart method fills a string with another string up to a certain length
// this is used to ensure the month and day are two characters long
var minDay = String(minDate.getDate()).padStart(2, '0');
var minMonth = String(minDate.getMonth() + 1).padStart(2, '0');
var minYear = minDate.getFullYear();
var minDateStr = minYear + '-' + minMonth + '-' + minDay;
// set minimum return date as one day after renting
dateInput.min = minDateStr;

var maxDay = String(maxDate.getDate()).padStart(2, '0');
var maxMonth = String(maxDate.getMonth() + 1).padStart(2, '0');
var maxYear = maxDate.getFullYear();
var maxDateStr = maxYear + '-' + maxMonth + '-' + maxDay;
dateInput.max = maxDateStr;


/* DRAW CARS ON CANVAS */
var carImgURLs = [
    "honda.jpg",
    "subaru.png",
    "ford.jpg",
    "mitsubishi.png",
    "toyota.png",
    "rolls_royce.png",
    "bentley.png",
    "bmw.png",
    "porsche.png",
    "mercedes.png"
];
var carPath = "./resources/cars/";
var ctx = canvas.getContext("2d");
let xPos = 25;
let yPos = 30;
var interval = 85;
function loadImages(imgArr, startIndex, xPos, yPos) {
    ctx.moveTo(0, 0);
    var image = new Image();
    
    image.onload = () => {
        ctx.drawImage(image, xPos, yPos);
        console.log("Drawing img #" + startIndex);
    }
    image.height = "50px";
    image.src = carPath + imgArr[startIndex];
    if(startIndex == imgArr.length-1) {
        return;
    } else {
        loadImages(carImgURLs, startIndex+1, startIndex==4 ? 10 : xPos+interval, startIndex==4 ? yPos+interval : yPos);
    }
}
loadImages(carImgURLs, 0, xPos, yPos);

document.getElementById('email-err').style.color = "#ececec";
document.getElementById('name-err').style.color = "#ececec";
function validateForm() {
    document.getElementById('email-err').style.color = "#ececec";
    document.getElementById('name-err').style.color = "#ececec";
    nameInput.style.border = "";
    emailInput.style.border = "";
    dateInput.style.border = "";

    var valid = true;
    if(!nameInput.value || !isNaN(nameInput.value)) {
        valid = false;
        nameInput.style.border = "2px solid red";
        document.getElementById('name-err').style.color = "red";
    }
    // basic validation checks for '@' and '.' in email
    if(!emailInput.value || !isNaN(emailInput.value) || !emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        valid = false;
        emailInput.style.border = "2px solid red";
        document.getElementById('email-err').style.color = "red";
    }

    if(!dateInput.value) {
        valid = false;
        dateInput.style.border = "2px solid red";
    }
    console.log(dateInput.value);
}

