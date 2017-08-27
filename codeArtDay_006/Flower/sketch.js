var circ;
var c;
var step = 0;

var greens = [];
var g1;
var g2;
var g3;
var g4;

var yellows = [];
var y1;
var y2;
var y3;
var y4;

var blues = [];
var b1;
var b2;
var b3;
var b4;

var pinks = [];
var p1;
var p2;
var p3;
var p4;

var colors = [];

function setup() {
  createCanvas(300, 300);
  background(255);
  stroke(255, 255, 255, 50);
  
  g1 = color(10, 96, 115, 5);
  g2 = color(46, 157, 164, 5);
  g3 = color(70, 207, 208, 5);
  g4 = color(138, 245, 214, 5);
  
  greens.push(g1);
  greens.push(g2);
  greens.push(g3);
  greens.push(g4);
  
  y1 = color(73, 10, 115, 5);
  y2 = color(164, 46, 124, 5);
  y3 = color(208, 70, 159, 5);
  y4 = color(245, 138, 184, 5);
  
  yellows.push(y1);
  yellows.push(y2);
  yellows.push(y3);
  yellows.push(y4);
  
  circ = new Circle(width/2, height/2, 50);

}

function draw() {
  // background(255);
  fill(greens[2]);
  circ.show();
  circ.grow(8);
}

function Circle(x, y, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
}

Circle.prototype.grow = function(size) {
  if (this.rad < sqrt(2*(width/2*width/2))) {
    this.rad = this.rad + size/2;
  } else {
    this.x = width/2;
    this.y = height/2;
    this.rad = 50;
    step++;
  }
}

Circle.prototype.show = function() {
  ellipse(this.x, this.y, this.rad, this.rad);
}