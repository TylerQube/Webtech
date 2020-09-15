// Tyler Smith, 9/11/2020, JS Exercise 4, Web Technologies

// takes input input element
function menu() {
    const input = document.getElementById('func-num');
    const display = document.getElementById('error-display');
    const funcTitle = document.getElementById('function-title');
    const cover = document.getElementById('cover');

    // timed delay for running functions in ms
    const funcDelay = 650;
    
    
    var funcNum = parseInt(input.value);
    display.style.fontSize = "";

    if(!funcNum || funcNum > 5 || funcNum < 1 || funcNum % 1 != 0) {
        input.style.border = "2px solid red";
        display.style.color = "red";
        display.innerHTML = "Invalid selection";
        display.style.transform = "scale(1)";
        
    } else {
        input.style.border = "";
        display.innerHTML = "";
        display.style.transform = "";

        if (funcNum != 5) {
            cover.style.height = "100%";
        }
        switch(funcNum) {
            case 1:
                funcTitle.innerHTML = "Practicing Loops";
                // setTimeout calls the specified function after the second parameter (in ms) has elapsed
                setTimeout(() => {
                    practicingLoops();
                }, funcDelay);
                break;
            case 2:
                funcTitle.innerHTML = "Armstrong Numbers";
                setTimeout(() => {
                    armstrongNums();
                }, funcDelay); 
                break;
            case 3:
                funcTitle.innerHTML = "Pattern Creation";
                setTimeout(() => {
                    patternCreation();
                }, funcDelay);
                break;
            case 4:
                funcTitle.innerHTML = "Find Password";
                setTimeout(() => {
                    findPassword();
                }, funcDelay);
                break;
            case 5:
                cover.style.height = "100%";
                funcTitle.innerHTML = "Goodbye!";
                setTimeout(() => {
                    // couldn't get JS to close the window even after reopening it, so chose to redirect instead
                    window.open('https://www.birdsarentreal.com', "_self");
                }, funcDelay);
                break;
        }
    }
}

function resetPage(htmlContent) {
    const funcTitle = document.getElementById('function-title');
    const cover = document.getElementById('cover');
    const container = document.getElementById('page-container');

    cover.style.height = "";
    container.innerHTML = htmlContent;
}

function practicingLoops() {
    setTimeout(() => {
        document.getElementById('function-title').innerHTML = "";
    }, 500);
    
    // funciton html content
    const content = 
    `<h1>Enter a positive integer</h1>
    <input type="number" id="num-input" min="1" value="500"/>
    <div class="btn no-select" id="run-loop">Run</div>
    <h2 id="error-display">Placeholder</h2>
    <div class="flex-row">
        <div class="outlined">
            <h2>For loop result:</h2>
            <h1 id="for-loop"></h1>
        </div>
        <div class="outlined">
            <h2>while loop result:</h2>
            <h1 id="while-loop"></h1>
        </div>
        <div class="outlined">
            <h2>Do While loop result:</h2>
            <h1 id="do-while-loop"></h1>
        </div>
    </div>
    <div class="back-btn" id="back">Go Back</div>`;
    resetPage(content);

    const numInput = document.getElementById('num-input');
    const errDisplay = document.getElementById('error-display');
    const backBtn = document.getElementById('back');

    backBtn.addEventListener('click', e => {
        window.location.reload();
    });

    document.getElementById('run-loop').addEventListener('click', e => {
        numInput.style.border = "";
        errDisplay.style.color = "";
        errDisplay.style.transform = "";
        errDisplay.innerHTML = "";

        var loopNum = parseInt(numInput.value);
        if(!loopNum || loopNum < 1 || loopNum % 1 != 0) {
            numInput.style.border = "2px solid red";
            errDisplay.style.transform = "scale(1)";
            errDisplay.style.color = "red";
            errDisplay.innerHTML = "Input must be a positive integer";
        } else {
            errDisplay.innerHTML = "running loops...";
            errDisplay.style.color = "green";
            errDisplay.style.transform = "scale(1)";

            /* I think that the for loop is most appropriate loop for this situation, as you can instantiate,
               check the condition, and iterate all in the loop definition without any unnecessary lines */
            var forSum = 0;
            for(let i = 1; i <= loopNum; i++) {
                forSum += i;
            }
            document.getElementById('for-loop').innerHTML = forSum;

            var whileSum = 0;
            i = 1;
            /* in this case, the while loop is more of a less dense for loop, instantiating and iterating the
               number in a separate line of code */
            while(i <= loopNum) {
                whileSum += i;
                i++;
            }
            document.getElementById('while-loop').innerHTML = whileSum;

            var doWhileSum = 0;
            i = 1;
            /* The do while is similar to while, however I had to take into consideration that the condition
                isn't evaluated until after the code block is run, meaning it will always run at least once */
            do {
                doWhileSum += i;
                i++;
            } while(i <= loopNum);
            document.getElementById('do-while-loop').innerHTML = doWhileSum;

            // to output sums of odds or evens, user input like checkboxes would select odds/evens/both,
            // and a step variable would be set to skip over odds or evens each loop iteration

            // a stop condition could be taken as a number from the user, which would then use break;,
            // or set another condition to false in the case of while/do while

            // finding a sum within a range would take user input of min and max, then set the iteration variable
            // to the minimum, and the <= condition to the maximum number
        }
    });
}

function armstrongNums() {
    setTimeout(() => {
        document.getElementById('function-title').innerHTML = "";
    }, 500);
    
    // funciton html content
    const content = `
    <h1>Enter three digits</h1>
    <div class="flex-row">
        <input type="number" id="num-one" min="0" max="9" value="1"/>
        <input type="number" id="num-two" min="0" max="9" value="2"/>
        <input type="number" id="num-three" min="0" max="9" value="3"/>
    </div>
    <div class="btn no-select" id="run-func">Run</div>
    <h2 id="error-display">Placeholder</h2>
    <h1 id="armstrong-display"></h1>
    <div class="back-btn" id="back">Go Back</div>`;
    resetPage(content);

    const runBtn = document.getElementById('run-func');

    const inputOne = document.getElementById('num-one');
    const inputTwo = document.getElementById('num-two');
    const inputThree = document.getElementById('num-three');
    const inputs = [inputOne, inputTwo, inputThree];

    const errDisplay = document.getElementById('error-display');
    const backBtn = document.getElementById('back');
    const output = document.getElementById('armstrong-display');

    backBtn.addEventListener('click', e => {
        window.location.reload();
    });

    runBtn.addEventListener('click', e => {
        var inputsValid = true;
        // foreach to validate each input
        inputs.forEach((input, index) => {
            input.style.border = "";
            errDisplay.style.color = "";
            errDisplay.style.transform = "";
            errDisplay.innerHTML = "";

            if(!input.value || input.value < 0 || input.value % 1 != 0 || input.value.length > 1) {
                input.style.border = "2px solid red";
                inputsValid = false;
            } 
        });

        if(!inputsValid) {
            errDisplay.style.transform = "scale(1)";
            errDisplay.style.color = "red";
            errDisplay.innerHTML = "Inputs must be positive integers";
        } else {
            errDisplay.style.color = "green";
            errDisplay.style.transform = "scale(1)";
            errDisplay.innerHTML = "Armstrong Number Found!";

            var numOne = parseInt(inputOne.value);
            var numTwo = parseInt(inputTwo.value);
            var numThree = parseInt(inputThree.value);

            var armstrongNum = numOne**3+numTwo**3+numThree**3;
            output.innerHTML = armstrongNum;
        }
    });
}

function patternCreation() {
    setTimeout(() => {
        document.getElementById('function-title').innerHTML = "";
    }, 500);

    // funciton html content
    const content = `
    <h1>Enter the number <br/>of pattern layers!</h1>
    <input type="number" id="num-input" min="1" value="7"/>
    <div class="btn no-select" id="run-func">Run</div>
    <h2 id="error-display">Placeholder</h2>
    <h2 id="pattern-display"></h2>
    <div class="back-btn" id="back">Go Back</div>`;
    resetPage(content);

    const runBtn = document.getElementById('run-func');

    const numInput = document.getElementById('num-input');

    const errDisplay = document.getElementById('error-display');
    const backBtn = document.getElementById('back');
    const output = document.getElementById('pattern-display');

    backBtn.addEventListener('click', e => {
        window.location.reload();
    });

    runBtn.addEventListener('click', e => {
        numInput.style.border = "";
        errDisplay.style.color = "";
        errDisplay.style.transform = "";
        errDisplay.innerHTML = "";

        // code to take user input for number of layers
        var layerNum = parseInt(numInput.value);
        if(!layerNum || layerNum < 1 || layerNum % 1 != 0) {
            numInput.style.border = "2px solid red";
            errDisplay.style.transform = "scale(1)";
            errDisplay.style.color = "red";
            errDisplay.innerHTML = "Input must be a positive integer";
        } else {
            errDisplay.innerHTML = "Built pattern!";
            errDisplay.style.color = "green";
            errDisplay.style.transform = "scale(1)";

            var numStars = 1;
            var patternStr = "";
            // modified to stop at user inputed layer number
            for(let i = 0; i < layerNum; i++) {
                for(let j = 0; j < numStars; j++) {
                    patternStr += '*';
                }
                patternStr += "<br/>";
                numStars += 1;
            }
            output.innerHTML = patternStr;
        }
    });
}

function findPassword() {
    setTimeout(() => {
        document.getElementById('function-title').innerHTML = "";
    }, 500);
    
    // funciton html content
    const content = `
    <h1>Enter your first and last name:</h1>
    <div class="flex-row">
        <input type="text" id="first-name" value="Ben"/>
        <input type="text" id="last-name" value="Kenobi"/>
    </div>
    <div class="btn no-select" id="run-func">Create Password</div>
    <h2 id="error-display">Placeholder</h2>
    <h2 id="password-display"></h2>
    <div class="back-btn" id="back">Go Back</div>`;
    resetPage(content);

    const firstInput = document.getElementById('first-name');
    const lastInput = document.getElementById('last-name');

    const runBtn = document.getElementById('run-func');
    const errDisplay = document.getElementById('error-display');
    const passDisplay = document.getElementById('password-display');
    const backBtn = document.getElementById('back');

    backBtn.addEventListener('click', e => {
        window.location.reload();
    });

    runBtn.addEventListener('click', e => {
        firstInput.style.border = "";
        lastInput.style.border = "";

        //validate input
        var valid = true;
        if(!firstInput.value || !isNaN(firstInput.value)) {
            firstInput.style.border = "2px solid red";
            valid = false;
        }
        if(!lastInput.value || !isNaN(lastInput.value)) {
            lastInput.style.border = "2px solid red";
            valid = false;
        }

        // act on input validity
        if(!valid) {
            errDisplay.style.transform = "scale(1)";
            errDisplay.style.color = "red";
            errDisplay.innerHTML = "First and last name must be entered";
        } else {
            errDisplay.innerHTML = "Password created!";
            errDisplay.style.color = "green";
            errDisplay.style.transform = "scale(1)";

            var firstName = firstInput.value.toLowerCase();
            var lastName = lastInput.value.toLowerCase();
            var password = firstName.substring(0, 1) + "10" + lastName.substring(lastName.length-2);
            passDisplay.innerHTML = password;

        }
    });

}