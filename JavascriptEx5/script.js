/* Monica Narciso & Tyler Smith, 9/18/2020, Javascript Exercise 5, Web Technologies */
const btnMult = document.getElementById('btn-mult');
const btnQuiz = document.getElementById('btn-quiz');
const container = document.getElementById('func-container');

// creates multiplication table from user input
btnMult.addEventListener('click', e => {
    var numRows;
    while(!numRows || isNaN(numRows) || numRows < 1) {
        numRows = parseInt(prompt("How many rows would you like in this multiplication table?", 10));
    }
    var numCols;
    while(!numCols || isNaN(numCols) || numCols < 1) {
        numCols = parseInt(prompt("How many columns?", 10));
    }

    var startNum;
    while(!startNum || isNaN(startNum) || startNum < 1) {
        startNum = parseInt(prompt("Starting number:", 1));
    }
    container.innerHTML = "";

    // create multiplication table
    var table = document.createElement('table');
    // create top row
    var topRow = document.createElement('tr');
    // top left empty cell
    var emptyCell = document.createElement('td');
    emptyCell.style.border = "0";
    emptyCell.style.backgroundColor = "white";
    topRow.appendChild(emptyCell);
    for(let i = startNum; i < startNum+numCols; i++) {
        var cell = document.createElement('td');
        cell.innerHTML = i;
        cell.style.border = "0";
        topRow.appendChild(cell);
    }
    table.appendChild(topRow);

    //iterate rows
    for(let i = startNum; i < startNum+numRows; i++) {
        var row = document.createElement('tr');
        // add left label column
        let labelCell = document.createElement('td');
        labelCell.innerHTML = i;
        labelCell.style.border = "0";
        row.appendChild(labelCell);
        //iterate columns
        for(let j = startNum; j < startNum+numCols; j++) {
            let cell = document.createElement('td');
            cell.innerHTML = i*j;
            if (!(j == startNum && i == startNum)) {
                
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
});

// creates math quiz from user input
btnQuiz.addEventListener('click', e => {

});