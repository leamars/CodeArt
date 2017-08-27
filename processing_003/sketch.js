var y = [];
var x = [];

function setup() {
  createCanvas(500, 500);
  y.push(width);
  x.push(height);
}

function draw() {
  background(38, 130, 204, 0.5);
  
  y.push(mouseY);
  x.push(mouseX);
  fill(200, 17, 17, 1);
  for (var i = 1; i < y.length; i++) {
    rect(mouseX, y[i], mouseY, y[i-1]);
  }
}