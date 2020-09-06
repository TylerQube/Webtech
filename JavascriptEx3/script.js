/* Tyler Smith, 9/8/2020, Javascript Ex 3, Web Technologies*/ 
const container = document.getElementById('functionContainer');
// tracks currently viewed function
var current = 0;

function numbers() {
    // don't reload if function is already opened
    if(current == 1) {
        return;
    }
    // set current function
    current = 1;

    let delay = 400;
    // no delay if container is not already open
    if(container.style.height == "") {
        delay = 0;
    }

    //reset container before adding html
    container.style.height = "";
    var numForm = 
    `<div class="flex-col">
        <h2>Function: Numbers</h2>
        <h3>Enter two numbers: </h3>
        <div class="flex-row">
            <input type="number" class="num-input" id="input-one" value="8"/>
            <input type="number" class="num-input" id="input-two" value="5"/>
        </div>
        <div class="btn-small no-select" id="btn-run">Run</div>
        <h2 id="result-display"></h2>
    </div>`;

    // delay to allow container to animate
    setTimeout(() => {
        container.innerHTML = numForm;
        container.style.height = "400px";

        // event listener on run button
        document.getElementById('btn-run').addEventListener('click', e => {
            //validate input
            const inputOne = document.getElementById('input-one');
            const inputTwo = document.getElementById('input-two');

            // reset border
            inputOne.style.border = null;
            inputTwo.style.border = null;
            var valid = true;
            if(inputOne.value == "" || isNaN(inputOne.value)) {
                inputOne.style.border = "2px solid red";
                valid = false;
            }
            if(inputTwo.value == "" || isNaN(inputTwo.value)) {
                inputTwo.style.border = "2px solid red";
                valid = false;
            }

            // evaluate numbers
            if (valid) {
                var greaterNum = "The greater number is ";
                var numDiff = "The difference between your numbers is ";

                if (Number(inputOne.value) > Number(inputTwo.value)) {
                    console.log(inputOne.value + " is greater than " + inputTwo.value);
                    greaterNum += inputOne.value;
                    numDiff += Math.abs(inputOne.value - inputTwo.value);
                } else if (Number(inputTwo.value) > Number(inputOne.value)) {
                    greaterNum += inputTwo.value;
                    numDiff += Math.abs(inputTwo.value - inputOne.value);
                } else {
                    greaterNum = "The two numbers are equal";
                    numDiff = "";
                }
                
                document.getElementById('result-display').innerHTML = greaterNum + "<br/>" + numDiff;
            }
        });
    
    }, delay);
    
}

function language() {
    if(current == 2) {
        return;
    }
    current = 2;

    let delay = 400;
    // no delay if container is not already open
    if(container.style.height == "") {
        delay = 0;
    }

    container.style.height = "";
    
    setTimeout(() => {
        var numForm = 
        `<div class="flex-col">
            <h2>Function: Hello World</h2>
            <h3>Enter a valid language code:</h3>
            <h4>(en, es, fr, de, ru)</h4>
            <input type="text" id="lang-code" value="es"/>
            <div class="btn-small no-select" id="btn-run">Run</div>
            <h2 id="result-display"></h2>
        </div>`;
        container.innerHTML = numForm;
        container.style.height = "400px";

        const input = document.getElementById('lang-code');
        const btn = document.getElementById('btn-run');
        const result = document.getElementById('result-display');

        btn.addEventListener('click', e => {
            input.style.border = "";
            result.innerHTML = "";
            // validate input
            if(input.value.length > 2 || input.value.length < 1 || !isNaN(input.value)) {
                input.style.border = "2px solid red";
                result.innerHTML = "Code must be 2 characters";
            } else {
                var code = input.value;
                var message = "";
                switch(code) {
                    case "en":
                        message = "hello, world";
                        break;
                    case "es":
                        message = "hola, mundo"
                        break;
                    case "fr":
                        message = "bounjour, le monde"
                        break;
                    case "de":
                        message = "hallo, welt";
                        break;
                    case "ru":
                        message = "Привет мир";
                        break;
                    default:
                        message = "hello, world";
                        break;
                }
                result.innerHTML = message;
            }
        });
    }, delay);
}

function pluralize() {
    if(current == 3) {
        return;
    }
    current = 3;

    let delay = 400;
    // no delay if container is not already open
    if(container.style.height == "") {
        delay = 0;
    }

    container.style.height = "";
    
    setTimeout(() => {
        var numForm = 
        `<div class="flex-col">
            <h2>Function: Pluralize</h2>
            <h3>Enter a singular noun, <br/>and a positive integer:</h3>
            <div class="flex-row">
                <input type="text" id="noun-input" value="dog"/>
                <input type="number" id="num-input" value="2"/>
            </div>
            <div class="btn-small no-select" id="btn-run">Run</div>
            <h2 id="result-display"></h2>
        </div>`;
        container.innerHTML = numForm;
        container.style.height = "400px";

        const input = document.getElementById('noun-input');
        const numInput = document.getElementById('num-input');
        const btn = document.getElementById('btn-run');
        const result = document.getElementById('result-display');

        btn.addEventListener('click', e => {
            result.innerHTML = "";
            input.style.border = "";
            numInput.style.border = "";
            var valid = true;
            // validate input
            if(!isNaN(input.value)) {
                result.innerHTML = "Input must be a noun and a positive number";
                input.style.border = "2px solid red";
                valid = false;
            } 
            if (numInput.value < 1) {
                result.innerHTML = "Input must be a noun and a positive number";
                numInput.style.border = "2px solid red";
                valid = false;
            }
            // if inputs are valid
            if(valid) {
                var noun = input.value;
                var plural = noun;

                // pluralize input
                if(noun.endsWith("us")) {
                    plural = noun.slice(0, noun.length-2) + "i";
                } else if(noun.endsWith("s")) {
                    plural += "es";
                } else if(noun == "mouse") {
                    plural = "mice";
                } else {
                    plural += "s";
                }
                if (numInput.value == 1) {
                    result.innerHTML = numInput.value + " " + noun;
                } else {
                    result.innerHTML = numInput.value + " " + plural;
                }
            }
        });
    }, delay);
}