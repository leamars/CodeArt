var shapesPink = [];
var shapesYellow = [];
var shapesGreen = [];
var i = 0;
var rot = 0;

var col;
function setup() {
  createCanvas(300, 300)
  var sq = new Square(10, 85, 120);
  sq.generate();
}

function draw() {
  
  colorMode(RGB, 100);
  background(255, 255, 255, 0.3);
  colorMode(HSB, 100);
  
  angleMode(DEGREES);
  
  push()
  translate(300, 50);
  rotate(90 + rot+1);
  if (i < shapesPink.length) {
    var sh = shapesPink[i];
    sh.generate();
    DrawS(sh, 127);
  } else {
    // i = 0;
  }
  pop();
  
  push()
  translate(100, -20);
  rotate(60 + rot+2);
  if (i < shapesYellow.length) {
    var sh = shapesYellow[i];
    sh.generate();
    DrawS(sh, 20);
  } else {
    // i = 0;
  }
  pop();
  
  push()
  translate(100, 300);
  rotate(270 + rot+3);
  if (i < shapesGreen.length) {
    var sh = shapesGreen[i];
    sh.generate();
    DrawS(sh, 50);
  } else {
    // i = 0;
  }
  pop();
  i++;
  rot++;
}

function Square(x, y, size ) {
  this.x = x;
  this.y = y;
  this.size = size;
  shapesPink.push(this)
  shapesGreen.push(this)
  shapesYellow.push(this)
}

Square.prototype.generate = function() {
  if (this.size > 5) {
    var sq1 = new Square(this.x + this.size/1.5, this.y, this.size/1.5);
    var sq2 = new Square(this.x + this.size/1.5, this.y, this.size/1.5);
    var sq3 = new Square(this.x + this.size/1.5, this.y + this.size/1.5, this.size/1.5)
    
    shapesPink.push(sq1);
    shapesPink.push(sq2);
    shapesPink.push(sq3);
    
    shapesGreen.push(sq1);
    shapesGreen.push(sq2);
    shapesGreen.push(sq3);
    
    shapesYellow.push(sq1);
    shapesYellow.push(sq2);
    shapesYellow.push(sq3);

    sq1.generate();
    sq2.generate();
    sq3.generate();
  } 
}

function DrawS(shape, h) {
  noStroke();
  fill(h, 150, 100, 10);

  var s = shape
  beginShape();
  vertex(s.x + s.size/3.5, s.y - s.size/2.3);
  vertex(s.x + 3/4.2*s.size, s.y - s.size/2.3);
  vertex(s.x + s.size, s.y);
  vertex(s.x + 3/4.2*s.size, s.y + s.size/2.3);
  vertex(s.x + s.size/3.5, s.y + s.size/2.3);
  vertex(s.x, s.y);
  endShape(CLOSE);
}