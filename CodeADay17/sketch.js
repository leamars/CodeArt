var side = 300;
var cols = [];
var pause = 0;
function setup() {
  createCanvas(300, 300);
  background(255);
  
  cols = [color(200), color(100), color(75), color(233), color(129), color(23), color(255), color(0), color(55), color(133), color(78), color(19)];
}

function draw() {

  while (side > 100) {
    var sh = Shape(width/2, height/2, side, cols[floor(random(cols.length))]);
    side = side - 20;
  }
  
  if (pause % 8 == 0) {
  for (var i = 100; i <200; i+=20) {
    rectMode(CORNER);
    noStroke();
    fill(cols[floor(random(cols.length))]);
    rect(100, i, 100, 20);
  } 
  }
  
  if (pause > 8) {
    side = 300;
    pause = 0;
  }
  pause++;
}

function Shape(x, y, side, col) {
  fill(col);
  noStroke();
  rectMode(CENTER);
  this.x = x;
  this.y = y;
  this.side = side;
  rect(x, y, side, side);
}
