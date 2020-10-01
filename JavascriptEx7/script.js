// Tyler Smith, 9/29/20, Javascript Exercise 7, Web Technologies
const btn = document.getElementById('select-btn');
const funcSelect = document.getElementById('func-select');
const output = document.getElementById('output-container');

// set function input (when list items are clicked)
function setSelect(num) {
    funcSelect.value = num;
    callFunc(num);
}

// submit button listener
btn.addEventListener('click', e => {
    funcSelect.style.border = "";
    if(!funcSelect.value || funcSelect.value < 1 || funcSelect.value > 5 || funcSelect.value % 1 !== 0) {
        funcSelect.style.border = "3px solid red";
        console.log("invalid.");
        // exit function
        return;
    }

    // call appropriate function
    var funcNum = parseInt(funcSelect.value);
    callFunc(funcNum);
});

function callFunc(funcNum) {
    output.innerHTML = "";
    switch(funcNum) {
        case 1:
            var array = ["White", "Red", "Black", "Green"];
            arrayAsString(array);
            break;
        case 2:
            var array = [3, 'a', 'a', 'a', 2, 3, 2, 'a', 3, 'a', 'a'];
            modeElement(array);
            break;
        case 3:
            var array = [4, 6, 1, 10];
            sumOfSquares(array);
            break;
        case 4:
            var arr1 = [5, 5, 3, 7];
            var arr2 = [6, 4, 9, 12, 2];
            sumElements(arr1, arr2);
            break;
        case 5:
            quit();
            break;
    }
}

function arrayAsString(array) {
    console.log("Array as string!");

    var content = 
    `<h3>The following array will be sorted and joined with plus signs</h3>
     <p>[` + array.join(', ') + `]</p>
     <h1>&#8595;</h1>
     <p id="display"></p>
    `;
    output.innerHTML = content;

    
    array.sort();
    array = array.join(' + ');
    document.getElementById('display').innerHTML = array;
}

function modeElement(array) {
    console.log("Most common element!");

    var content = 
    `<h3>This function will find the most frequent element in the following array</h3>
     <p>[` + array.join(', ') + `]</p>
     <h1>&#8595;</h1>
     <p id="display"></p>
    `;
    output.innerHTML = content;

    let mostIndex;
    let mostFrequent = 0;
    let count;
    // iterate each element
    for(let i = 0; i < array.length; i++) {
        count = 0;
        // iterate to count instances of current element
        for(let j = 0; j < array.length; j++) {
            if(array[j] == array[i]) {
                count+= 1;
            }
        }
        // check if current element is most frequent
        if(count > mostFrequent) {
            mostFrequent = count;
            mostIndex = i;
        }
    }
    document.getElementById('display').innerHTML = array[mostIndex] + " is the most frequent element.";
}

function sumOfSquares(array) {
    console.log("Sum of squares!");

    var content = 
    `<h3>This function will find the sum of the squares of the following array</h3>
     <p>[` + array.join(', ') + `]</p>
     <h1>&#8595;</h1>
     <p id="display"></p>
    `;
    output.innerHTML = content;

    let sum = 0;
    // add the square of each iterated element
    for(let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2);
    }
    document.getElementById('display').innerHTML = "The sum of squares is " + sum;
}

function sumElements(arr1, arr2) {
    console.log("Sum corresponding elements!");

    

    var content = 
    `<h3>This function will sum the corresponding elements of the following arrays</h3>
     <p>[` + arr1.join(', ') + `]</p>
     <p>[` + arr2.join(', ') + `]</p>
     <h1>&#8595;</h1>
     <p id="display"></p>
    `;
    output.innerHTML = content;
    var greaterLength = Math.max(arr1.length, arr2.length);
    var shorterList = arr1.length < arr2.length ? arr1  : arr2;
    var longerList = arr1.length > arr2.length ? arr1 : arr2;
    var sumArr = [];
    for(let i = 0; i < greaterLength; i++) {
        // only attempt to add elements if they exist
        if(shorterList[i]) {
            sumArr.push(shorterList[i]+longerList[i]);
        // otherwise only include the longest list
        } else {
            sumArr.push(longerList[i]);
        }
    }
    document.getElementById('display').innerHTML = sumArr;
}

function quit() {
    console.log("Quitting...");
    output.innerHTML = `<h1>Goodbye!</h1>`;
}