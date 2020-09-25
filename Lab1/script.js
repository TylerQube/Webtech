// Tyler Smith, 9/25/2020, JS Lab 1, Web Technologies

const blkBtn = document.getElementById('blk-white-btn');
const chkBtn = document.getElementById('checkerboard-btn');
const chkContainer = document.getElementById('checkerboard-container');
const msg = document.getElementById('side-msg');

blkBtn.addEventListener('click', e => {
    // reset container/message
    chkContainer.innerHTML = "";
    msg.innerHTML = "";
    // pick a random number between 1 and 10 
    var randNum = Math.floor((Math.random()*10)+1);
    //generate checkerboard
    var board = document.createElement('table');
    // iterate rows
    for(let i = 0; i < randNum; i++) {
        var newRow = document.createElement('tr');
        // iterate columns
        for(let j = 0; j < randNum; j++) {
            var newCell = document.createElement('td');
            // alternate colors in each column
            if(j % 2 !== 0) {
                newCell.innerHTML = "White";
                newCell.style.backgroundColor = "white";
                
            } else {
                newCell.innerHTML = "Black";
                newCell.style.backgroundColor = "black"; 
                newCell.style.color = "white"
            }
            // set consistent size for cells
            newCell.style.width = "50px";
            newCell.style.height = "50px";
            newRow.appendChild(newCell);
        }
        board.appendChild(newRow);
    }
    chkContainer.appendChild(board);
    displayMsg();
});

chkBtn.addEventListener('click', e => {
    chkContainer.innerHTML = "";
    msg.innerHTML = "";
    var randNum = Math.floor((Math.random()*10)+1);
    //generate checkerboard
    // almost exactly the same as black&white function
    var board = document.createElement('table');
    
    for(let i = 0; i < randNum; i++) {
        var newRow = document.createElement('tr');
        
        for(let j = 0; j < randNum; j++) {
            var newCell = document.createElement('td');
            // this will allow the alternation of colors to make a checkerboard
            if(i % 2 !== j % 2) {
                newCell.innerHTML = "White";
                newCell.style.backgroundColor = "white";
                
            } else {
                newCell.innerHTML = "Black";
                newCell.style.backgroundColor = "black"; 
                newCell.style.color = "white"
            }
            newCell.style.width = "50px";
            newCell.style.height = "50px";
            newRow.appendChild(newCell);
        }
        board.appendChild(newRow);
    }
    chkContainer.appendChild(board);
    displayMsg();
});

// display a message on the left
function displayMsg() {
    msg.innerHTML = "Do you like this design?<br/> I think it looks beautiful!";
}