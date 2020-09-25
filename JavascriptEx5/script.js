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
    var tableImg = document.createElement('img');
    tableImg.src = './table.png';
    container.appendChild(tableImg);
});

// creates math quiz from user input
btnQuiz.addEventListener('click', e => {
    container.innerHTML = "";
    //creates bounds for math problems from prompt
	var lBound; //smallest factor
    while(!lBound || isNaN(lBound) || lBound < 1) {
        lBound = parseInt(prompt("Lowest number", 1));
    }
    var uBound; //largest factor
    while(!uBound || isNaN(uBound) || uBound < 1) {
        uBound = parseInt(prompt("Highest number", 10));
    }
	
    //creates + displayes the randomly generated math problems
    //also generates answer key in an array
	
    var key = [];
    const questionsDiv = document.createElement('div');

    var inputList = []

	for(i = 1; i <= 10; i++){
        var qContainer = document.createElement('div');
        var equation = document.createElement("p");
		var n1 = Math.floor(Math.random() * (uBound - lBound + 1) ) + lBound;
		var n2 = Math.floor(Math.random() * (uBound - lBound + 1) ) + lBound;

		ans = n1*n2; //create answer key
		key[key.length] = ans;	
		
		equation.innerHTML = "Question " + i + ": " + n1 + " x " + n2 + "= "; //display equation
        qContainer.appendChild(equation);
        

        //generates input boxes for answers and puts individual boxes into array
        input = document.createElement("input");
        input.type = "number";
        qContainer.classList.add('flex-row');
        qContainer.appendChild(input);
        questionsDiv.appendChild(qContainer);
		inputList[inputList.length] = input;
    }
    container.appendChild(questionsDiv);
    
    //generates submit button
    //compares values in answer key array with corresponding value in inputList array
    //calculates score
    var submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.classList.add('submit-btn');
	container.appendChild(submit);
    var display = document.createElement('h2');
		submit.addEventListener('click', e => { 
            display.innerHTML = "";
			score = 100 //reset score
			for(i = 0; i <= 9; i++){
				if(Math.round(key[i] * (10 ^ 2)) / (10 ^ 2) !== Math.round(inputList[i].value * (10 ^ 2)) / (10 ^ 2)){ //comparison
					score = score -10; //score change if false
				}
			}
            console.log(score);
            if(score == 100) {
                display.innerHTML = "You got a perfect 100%!";
            } else {
                display.innerHTML= "Your score: " + score + "%";
            }
            
            container.appendChild(display);
		});
	console.log("ANSWERS: " + key); //cheat sheet for reference ;)
});