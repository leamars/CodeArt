var cols = [];
var startSide = 100;
var lines;
var stopper = 0;
function setup() {
  createCanvas(300, 300);
  cols = [new Color(100, 150, 200), new Color(50, 23, 199), new Color(177, 177, 28)];
  lines = new HorizontalLines(width/2 - startSide/2, height/2 - startSide/2, startSide, 20);
}

function draw() {
  lines.show();
  if (stopper > 7) {
    lines.proceed();
    stopper = 0;
  }
  stopper++;
  
}

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

function HorizontalLines(x,y, width, height, col) {
  this.col = col;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

HorizontalLines.prototype.show = function() {
  noStroke();
  var c = cols[floor(random(cols.length))];
  fill(c.r, c.g, c.b);
  rect(this.x, this.y, this.width, this.height);
}

HorizontalLines.prototype.proceed = function() {
  if (this.y + 20 < 200) {
    this.y += 20;
  } else {
    this.y = 100;
  }
}