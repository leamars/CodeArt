var c = 0;
var stop = false;
var al = 0;
var timer = 0;
var circles = [];
function setup() {
  createCanvas(500,500);
  background(255);
  simple(width/2, height/2, width/2, 80, 60, 120);
}

function draw() {
  if (!stop) {
    simple(width/2, height/2, width/2, 80, 60, 120);
  } else {
    print(circles.length);
  }
  
  stop = true;
  move();
}

function move() {
  var myCircle = circles[0];
  
  fill(myCircle.r, myCircle.g, myCirlce.b, myCircle.alp);
  ellipse(myCircle.x, myCircle.y, myCircle.rad, myCircles.rad);
  
  timer++;
}

function shape(x, y, rad, r, g, b, alp) {
  stroke(b, g, r, 20);
  fill(r, g, b, alp);
  ellipse(x, y, rad, rad);
  if (rad > 2) {
    shape(x - rad/3, y - rad/3, rad/1.5, r, g + 30, b + 10, alp+10);
    shape(x + rad/3, y + rad/3, rad/1.5, r, g - 10, b + 10, alp+10);
    shape(x - rad/3, y + rad/3, rad/1.5, r, g - 10, b + 10, alp+10);
  }
}

function simple(x, y, rad, r, g, b) {
  print(timer);
  stroke(255);
  fill(120, 34, 200);
  circles.push(new Circle(x, y, rad, r, g, b));
  if (rad > 2 && (timer % 100) == 0) {
    simple(x - rad/2, y, rad/2, rad/2, 0, g, b + 100);
    simple(x + rad/2, y, rad/2, rad/2, 0, g, b - 50);
    simple(x, y - rad/2, rad/2, rad/2, 0, g, b + 80);
    simple(x, y + rad/2, rad/2, rad/2, 0, g, b - 20);
  }
}

function Circle(x, y, rad, r, g, b) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.r = r;
  this.g = g;
  this.b = b;
}