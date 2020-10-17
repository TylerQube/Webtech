// Tyler Smith, 10/14/20, Quarter Project 1, Web Technologies
const canvas = document.getElementById('car-canvas');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const dateInput = document.getElementById('date-input');
const carSelect = document.getElementById('car-select');
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

// default value is 5 days
var defaultDate = minDate;
defaultDate.setDate(minDate.getDate()+4);
var defaultDay = String(defaultDate.getDate()).padStart(2, '0');
var defaultMonth = String(defaultDate.getMonth() + 1).padStart(2, '0');
var defaultYear = defaultDate.getFullYear();
var defaultDateStr = defaultYear + '-' + defaultMonth + '-' + defaultDay;
dateInput.value = defaultDateStr;


var carStrings = [
    "Honda Minivan",
    "Ford Pickup",
    "Subaru SUV",
    "Mitsubishi Mirage",
    "Toyota Highlander",
    "Rolls Royce",
    "Bentley",
    "BMW",
    "Porsche",
    "Mercedes-Benz"
]
/* DRAW CARS ON CANVAS */
var carImgURLs = [
    "honda.jpg",
    "ford.jpg",
    "subaru.png",
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
var interval = 100;
var carPosList = [];
function loadImages(imgArr, startIndex, xPos, yPos) {
    ctx.moveTo(0, 0);
    var image = new Image();
    
    image.onload = () => {
        ctx.drawImage(image, xPos, yPos);
        // save position and size for animation
        carPosList.push([xPos, yPos, image.width, image.height]);
        if(startIndex == imgArr.length-1) {
            return;
        } else {
            loadImages(carImgURLs, startIndex+1, startIndex==4 ? 10 : xPos+interval, startIndex==4 ? yPos+interval : yPos);
        }
    }
    image.src = carPath + imgArr[startIndex];
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
    carSelect.style.border = "";

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

    if(carSelect.value == "Select a Model") {
        valid= false;
        carSelect.style.border = "2px solid red";
    }
    

    if(valid) {
        animateCar();
    }
}

function animateCar() {
    var carIndex = parseInt(carSelect.value);
    console.log(carStrings[carIndex]);
    // set variables to be used in animation
    var carX = carPosList[carIndex][0];
    var carY = carPosList[carIndex][1];
    // text position at initial car position
    var textX = carX;
    var textY = carY;
    // get image dimensions from previous array
    var carWidth = carPosList[carIndex][2];
    var carHeight = carPosList[carIndex][3];
    var carAnimation = setInterval(function() {
        ctx.moveTo(0, 0);
        ctx.clearRect(carX, carY, carWidth, carHeight);
        if(carIndex < 5) carY -= 1;
        if(carIndex > 4) carY += 1;
        var image = new Image();

        image.onload = () => {
            ctx.drawImage(image, carX, carY);
        }
        image.src = carPath + carImgURLs[carIndex];
    }, 10);
    setTimeout(function() {
        // end setInterval
        clearInterval(carAnimation);
        ctx.moveTo(0, 0);
        // draw text
        ctx.font = "20px arial";
        ctx.fillStyle = "black";
        ctx.fillText("Rented!", textX, textY+carWidth/3);
        // disable option and reset select
        carSelect.options[carIndex+1].disabled = true;
        carSelect.selectedIndex = 0;

        setTimeout(function() {
            createInvoice(carIndex);
        }, 200);
    }, 900);
}

function createInvoice(carIndex) {
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    var returnDate = new Date(dateInput.value.replace('-', '/'));
    var timeDiff = returnDate.getTime()-currentDate.getTime();
    // number of rented days as an integer
    var rentDays = timeDiff / (1000*3600*24);

    var currentDay = String(currentDate.getDate()).padStart(2, '0');
    var currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    var currentYear = currentDate.getFullYear();
    var currentDateStr = currentMonth + '/' + currentDay + '/' + currentYear;

    var returnDay = String(returnDate.getDate()).padStart(2, '0');
    var returnMonth = String(returnDate.getMonth() + 1).padStart(2, '0');
    var returnYear = returnDate.getFullYear();
    var returnDateStr = returnMonth + '/' + returnDay + '/' + returnYear;

    var carString = carStrings[carIndex];

    // calculate price based on car type
    var price = carIndex > 4 ? rentDays*49.99 : rentDays*29.99;
    price = "$" + price.toFixed(2);
    
    var invoiceHTML = `
    <h1>Your Invoice</h1>
    <p>Date: ${currentDateStr}</p>
    <p>Rented Model: ${carString}</p>
    <p>Return Date: ${returnDateStr}</p>
    <h2>Total:</h3>
    <p>${price}</p>`;

    /* invoice container inspired by w3schools modal box
       https://www.w3schools.com/howto/howto_css_modals.asp */
    document.getElementById('invoice-text').innerHTML = invoiceHTML;
    document.getElementById('invoice-container').style.display = "flex";
    setTimeout(function() {
        document.getElementById('invoice-content').style.bottom = "0px";
    }, 100);

    document.getElementById('close-btn').addEventListener('click', e => {
        document.getElementById('invoice-content').style.bottom = "100%";
        setTimeout(function() {
            document.getElementById('invoice-container').style.display="none";
        }, 400);
        
    });
    
}