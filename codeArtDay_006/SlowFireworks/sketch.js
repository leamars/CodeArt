var circ;
var c;
var step = 0;
var greens;
function setup() {
  createCanvas(300, 300);
  background(255);
  stroke(255, 255, 255, 50);
  // noStroke();
  greens =
  [color(10, 96, 115, 5),
    color(46, 157, 164, 5),
    color(70, 207, 208, 5),
  color(138, 245, 214, 5)];
  circ = new Circle(width/4, height/4, 25);
  cs = [
    color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5),
  color(73, 10, 115, 5),
    color(164, 46, 124, 5),
    color(208, 70, 159, 5),
  color(245, 138, 184, 5)
  ];
}

function draw() {
  // background(255);
  fill(cs[step]);
  circ.show();
  circ.grow(8, random(width));
}

function Circle(x, y, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
}

Circle.prototype.grow = function(size, wid) {
  if (this.rad < sqrt(2*(wid*wid))) {
    this.rad = this.rad + size/2;
  } else {
    this.x = random(width);
    this.y = random(height);
    this.rad = 20;
    step++;
  }
}

Circle.prototype.show = function() {
  ellipse(this.x, this.y, this.rad, this.rad);
}