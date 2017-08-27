var c = 0;
var stop = false;
var al = 0;
function setup() {
  createCanvas(500,500);
  background(0);
  noLoop();
}

function draw() {
  shape(width/2, height/2, width/3, 80, 60, 120, 20);
  shapeD(width/2, height/2, width/3, 80, 60, 120, 20);
  // shape(width, height, width/2, 50, 100, 100, 20);
  // shape(0, 0, width/2, 50, 100, 100, 20);
  // shape(width/4, height/4, width/4, 80, 60, 120, 40);
  // shape(width, height/4, width/4, 80, 60, 120, 40);
  // shape(width/4, height, width/4, 80, 60, 120, 40);
}

function shape(x, y, rad, r, g, b, alp) {
  stroke(b, g, r, 20);
  fill(r, g, b, alp);
  ellipse(x, y, rad, rad);
  if (rad > 2) {
    shape(x - rad/3, y - rad/3, rad/1.5, r, g + 30, b + 10, alp+10);
    shape(x + rad/3, y + rad/3, rad/1.5, r, g - 10, b + 10, alp+10);
  }
}

function shapeD(x, y, rad, r, g, b, alp) {
  stroke(b, g, r, 20);
  fill(r, g, b, alp);
  ellipse(x, y, rad, rad);
  if (rad > 2) {
    shape(x - rad/3, y + rad/3, rad/1.5, r, g + 30, b + 10, alp+10);
    shape(x + rad/3, y - rad/3, rad/1.5, r, g + 30, b + 10, alp+10);
  }
}