// Tyler Smith, 10/20/2020, Javascript Lab 2, Web Technologies
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext("2d");
function drawPumpkin(isDay /* true for daytime, false for nighttime */) {
    //set colors with ternary operators
    const skyColor = isDay ? "#99bbff" : "#080808";
    const faceColor = isDay ? "#000000" : "#ffff00";
    const pumpkinColor = "orange";
    
    ctx.fillStyle = skyColor;
    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();

    if(!isDay) {
        //draw stars
        var starR = 1;
        ctx.fillStyle = "white";
        for(let i = 0; i < 120; i++) {
            ctx.beginPath();
            ctx.arc(Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height), starR, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
        }
    }

    // draw pumpkin
    ctx.moveTo(0, 0);
    ctx.fillStyle = pumpkinColor;
    ctx.scale(1, 2);
    ctx.beginPath();
    let interval = 15;
    for(let i = 0; i < 2; i++) {
        console.log(interval);
        ctx.arc(canvas.width/2-interval, canvas.height/4, 40, 0, 2*Math.PI);
        ctx.fill();
        ctx.arc(canvas.width/2+interval, canvas.height/4, 40, 0, 2*Math.PI);
        ctx.fill();
        interval += 25;
    }
    ctx.scale(1, 1/2);

    // draw the stem
    ctx.moveTo(0, 0);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillRect(canvas.width/2-10, canvas.height/2-100, 20, 30);
    ctx.stroke();
    ctx.closePath();

    // draw the eyes
    drawEye(canvas.width/2-45, canvas.height/2-20, faceColor);
    drawEye(canvas.width/2+19, canvas.height/2-20, faceColor);

    //draw the mouth
    ctx.moveTo(0, 0);
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(2, 1);
    ctx.beginPath();
    ctx.arc(0, 20, 18, 0, Math.PI*-1);
    ctx.closePath();
    ctx.fill();
    ctx.scale(1/2, 1);

    //draw tooth
    ctx.moveTo(0, 0);
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.fillRect(6, 16, 10, 10);
    ctx.stroke();
    ctx.closePath();

    // draw sun or moon
    ctx.translate(-canvas.width/2, -canvas.height/2);
    if(isDay) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(60, 60, 30, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    } else {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(canvas.width-60, 60, 30, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = skyColor;
        ctx.beginPath();
        ctx.arc(canvas.width-72, 61, 30, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    
}

function drawEye(startX, startY, faceColor) {
    const ctx = canvas.getContext("2d");
    var eyeCoords = [28, 0, 14, -22];
    ctx.fillStyle = faceColor;

    ctx.moveTo(startX, startY);
    ctx.beginPath();
    ctx.lineTo(startX+eyeCoords[0], startY);
    ctx.lineTo(startX+eyeCoords[2], startY+eyeCoords[3]);
    ctx.lineTo(startX, startY);
    ctx.closePath();
    ctx.fill();
}

drawPumpkin(true);
setTimeout(() => {
    drawPumpkin(false);
}, 5000);
