// Tyler Smith, 9/25/2020, Javascript Exercise 6, Web Technologies
const billInput = document.getElementById('bill-amount');
const ratingInput = document.getElementById('rating');
const tipDisplay = document.getElementById('tip-percent');
const pplInput = document.getElementById('num-ppl');
const output = document.getElementById('tip-container');

document.getElementById('submit').addEventListener('click', e => {
    billInput.style.border = "";
    pplInput.style.border = "";
    // validate input
    var valid = true;
    if(!billInput.value || billInput.value < 0) {
        billInput.style.border = "2px solid red";
        valid = false;
    }

    if(!pplInput.value || pplInput.value <= 0 || pplInput.value % 1 !== 0) {
        pplInput.style.border = "2px solid red";
        valid = false;
    }

    // calculate & display tip
    if(valid) {
        console.log("calculating tip...");
        var billAmt = parseFloat(billInput.value).toFixed(2);
        var tipPercent = 0.05 + 0.05*parseInt(ratingInput.value);
        var numPpl = parseInt(pplInput.value);
        tipPercent = tipPercent.toFixed(2);
        
        var tipAmount = (billAmt*tipPercent).toFixed(2);
        var perPerson = (tipAmount/numPpl).toFixed(2);

        var msg = "<strong>Your Receipt:</strong>Total tip:<br/>$" + tipAmount + "<br/>";
        output.innerHTML = msg + "Tip per person:<br/>$" + perPerson;
        output.style.height = "200px";
        output.style.border = "1px solid black";
    } else {
        console.log("invalid inputs...")
    }


});

function updateDisplay() {
    switch(parseInt(ratingInput.value)) {
        case 0:
            // percent entity encode is &#37;
            tipDisplay.innerHTML = "5&#37;";
            break;
        case 1:
            tipDisplay.innerHTML = "10&#37;";
            break;
        case 2:
            tipDisplay.innerHTML = "15&#37;";
            break;
        case 3:
            tipDisplay.innerHTML = "20&#37;";
            break;
        case 4:
            tipDisplay.innerHTML = "25&#37;";
            break;
    }
}