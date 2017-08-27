var pressed = false;
var x = [];
var y = [];
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(30);
  x.push(mouseX);
  y.push(mouseY);
  
  if (pressed) {
    for (var i = x.length - 1; i > 0; i--) {
      stroke(i*5, 0, i*3, 255*(i/x.length));
      arc(x[i], y[i], i*5, i*5, 0, PI*((x.length - 1 - i)/100));
    }
  }
}

function mousePressed() {
  noFill();
  pressed = !pressed;
  if (!pressed) {
    x = [];
    y = [];
  }
}