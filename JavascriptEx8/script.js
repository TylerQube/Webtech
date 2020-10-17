// Monica Narciso & Tyler Smith, 10/9/20, JS Canvas Exercise, Web Technologies
const canvas = document.getElementById('drawing-canvas');

//add color inputs
function drawLine(clear=true) {
  if(clear) clearCanvas();
  var color = prompt("Enter color (word or hex value)");

	var c = document.getElementById("drawing-canvas");
  var ctx = c.getContext("2d");
  //first point of line
  ctx.moveTo(200, 200);
  // second point of line
  ctx.lineTo(300, 300);
	ctx.lineWidth = 5;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function drawCircle(clear=true) {
  if(clear) clearCanvas();
  var color = prompt("Enter color (word or hex value)");

	var c = document.getElementById("drawing-canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, 2*Math.PI);
	ctx.lineWidth = 5;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function drawRect(clear=true) {
  if(clear) clearCanvas();
  var color = prompt("Enter color (word or hex value)");

	var c = document.getElementById("drawing-canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(200, 200, 100, 100);
	ctx.lineWidth = 5;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function drawText(clear=true) {
  if(clear) clearCanvas();
  var color = prompt("Enter color (word or hex value)");

	var c = document.getElementById("drawing-canvas");
    var ctx = c.getContext("2d");
    ctx.font = "2rem Arial";
    ctx.strokeStyle = color;
    ctx.strokeText("Kirby is angry", 140, 50);
}

function drawImage(clear=true){
	if(clear) clearCanvas();

	var c = document.getElementById("drawing-canvas");
	var ctx = c.getContext('2d');
	var img = new Image();

	img.onload = function() {
	ctx.drawImage(img, 200, 200);
	};
	img.src = "kirb.png"
}

function drawGradient(clear=true){
  if(clear) clearCanvas();
  var color1 = prompt("Enter first color (word or hex value)");
  var color2 = prompt("Enter second color (word or hex value)");

	var c = document.getElementById("drawing-canvas");
	var ctx = c.getContext("2d");

	var grad = ctx.createLinearGradient(0,0,500,0);
	grad.addColorStop(1, color1);
	grad.addColorStop(0, color2);

	ctx.fillStyle = grad;
	ctx.fillRect(0,0,500,500);
}

//fix this one pls  - probelm is it only draws func2 bc of the clear canvas
function drawMult(clear=true){
  if(clear) {clearCanvas();console.log("clearing");}

    func1 = prompt("enter 2 tools", "tool 1/2")
    func2 = prompt("enter 2 tools", "tool 2/2")

  switch(func1) {
  case "line":
    drawLine(false);
    break;
  case "circle":
    drawCircle(false);
    break;
  case "rectangle":
      drawRect(false);
  break;
  case "text":
      drawText(false);
  break;
  case "image":
    drawImage(false);
    break;
  case "gradient":
    drawGradient(false);
    break;
  case "sculpture":
    drawSculpture(false);
    break;
  case "random":
    drawRand(false);
    break;
  default:
  var c = document.getElementById("drawing-canvas");
    var ctx = c.getContext("2d");
    ctx.font = "2rem Arial";
    ctx.strokeText("please enter real tools", 100, 250);
  }

  switch(func2) {
    case "line":
      drawLine(false);
      break;
    case "circle":
      drawCircle(false)
      break;
    case "rectangle":
        drawRect(false);
    break;
    case "text":
        drawText(false);
    break;
    case "image":
      drawImage(false);
      break;
    case "gradient":
      drawGradient(false);
      break;
    case "sculpture":
        drawSculpture(false);
    break;
    case "random":
        drawRand(false);
    break;
  default:
  var c = document.getElementById("drawing-canvas");
    var ctx = c.getContext("2d");
    ctx.font = "2rem Arial";
    ctx.strokeText("please enter real tools", 100, 250);
  }
}

function drawRand(clear=true){
  if(clear) clearCanvas();
  var tool = [drawLine, drawCircle, drawRect, drawText, drawImage, drawGradient, drawSculpture];
  tool[Math.floor(Math.random() * 6)](false);
}

function drawSculpture(clear=true){
  if(clear) clearCanvas();
  var color = prompt("Enter color (word or hex value)");
	var c = document.getElementById("drawing-canvas");
	var ctx = c.getContext("2d");

  // begin custom shape
	ctx.beginPath();
	ctx.moveTo(Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100);
	for(i = 0; i <= Math.floor(Math.random() * 5) + 0; i++){
		ctx.bezierCurveTo(Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100);
		ctx.lineTo(Math.floor(Math.random() * 400) + 100, Math.floor(Math.random() * 400) + 100);
  }

      // complete custom shape
  ctx.closePath();
	ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.fillStyle= color;
  ctx.fill();
  ctx.stroke();
}

function scale(){
  clearCanvas();
  var c = document.getElementById("drawing-canvas");
  var ctx = c.getContext("2d");
  ctx.scale(0.5, 0.5);
}

function clearCanvas() {
    console.log("clearing!");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
