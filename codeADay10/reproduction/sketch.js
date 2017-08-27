var shapes = [];
var x, y;

function setup() {
  createCanvas(1150, 630);
  rectMode(CENTER);
  
  x = 400;
  y = 135;
  
  for (var i = 0; i < 36; i++) {
    shapes.push(new Shape(x, y, 60));
    x+=70;
    if (x % 820 == 0) {
      y += 70;
      x = 400;
    }
  }
}

function draw() {
  frameRate(50);
  background(0);
  for (var i = 0; i < 36; i++) {
    shapes[i].display();
  }
}

function Shape(x, y, size) {
  this.r = [351, 337, 324, 307, 26];
    
  this.g = [68, 65, 64, 53, 59];
    
  this.b = [79, 60, 42, 26, 100];

  this.col = [
    new Color(this.r[0], this.g[0], this.b[0]),
    new Color(this.r[1], this.g[1], this.b[1]),
    new Color(this.r[2], this.g[2], this.b[2]),
    new Color(this.r[3], this.g[3], this.b[3]),
    new Color(this.r[4], this.g[4], this.b[4])
    ];
  
  this.x = x;
  this.y = y;
  this.s = size;
  
  this.c0 = this.c1 = this.c2 = this.c3 = this.c4 = new Color (0, 0, 0);
  this.a0 = this.a1 = this.a2 = this.a3 = this.a4 = 255;
  
  this.incr0 = random(.33, 3);
  this.incr1 = -random(.33, 3);
  this.incr2 = -random(.33, 3);
  this.incr3 = -random(.33, 3);
  this.incr4 = -random(.33, 3);
}

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Shape.prototype.display = function() {
  push();
  translate(this.x, this.y);
  
  this.a0 += this.incr0;
  if (this.a0 < 0) {
    this.incr0 = -this.incr0;
    this.c0 = this.col[floor(random(5))];
  }
  if (this.a0 > 255) {
    this.incr0 = -this.incr0;
  }
  
  fill(this.c0.r, this.c0.g, this.c0.b, this.a0);
  beginShape();
  vertex(-this.s/2, this.s/2);
  vertex(0, -this.s/2);
  vertex(this.s/2, -this.s/2);
  vertex(0, this.s/2);
  endShape(CLOSE);
  
  this.a1 += this.incr1;
  if (this.a1 < 0) {
    this.incr1 = -this.incr1;
    this.c1 = this.col[floor(random(5))];
  }
  
  if (this.a1 > 255) {
    this.incr1 = -this.incr1;
  }
  
  fill(this.c1.r, this.c1.g, this.c1.b, this.a1);
  beginShape();
  vertex(-this.s/2, -this.s/2);
  vertex(0, -this.s/2);
  vertex(this.s/2, this.s/2);
  vertex(0, this.s/2);
  endShape(CLOSE);
  
  this.a2 += this.incr2;
  if (this.a2 < 0) {
    this.incr2 = -this.incr2;
    this.c2 = this.col[floor(random(5))];
    print("COLOR: " + this.c2 + " ALPHA: " + this.a2);
  }
  
  if (this.a2 > 255) {
    this.incr2 = -this.incr2;
  }
  
  fill(this.c2.r, this.c2.g, this.c2.b, this.a2);
  beginShape();
  vertex(0, -this.s/2);
  vertex(this.s/4, 0);
  vertex(0, this.s/2);
  vertex(-this.s/4, 0);
  endShape(CLOSE);
  
  this.a3 += this.incr3;
  if (this.a3 < 0) {
    this.incr3 = -this.incr3;
    this.c3 = this.col[floor(random(5))];
  }
  
  if (this.a3 > 255) {
    this.incr3 = -this.incr3;
  }
  
  fill(this.c3.r, this.c3.g, this.c3.b, this.a3);
  beginShape();
  vertex(-this.s/2, -this.s/2);
  vertex(-this.s/4, 0);
  vertex(-this.s/2, this.s/2);
  endShape(CLOSE);
  
  this.a4 += this.incr4;
  if (this.a4 < 0) {
    this.incr4 = -this.incr4;
    this.c4 = this.col[floor(random(5))];
  }
  
  if (this.a4 > 255) {
    this.incr4 = -this.incr4;
  }

  fill(this.c4.r, this.c4.g, this.c4.b, this.a4);
  beginShape();
  vertex(this.s/2, -this.s/2);
  vertex(this.s/4, 0);
  vertex(this.s/2, this.s/2);
  endShape(CLOSE);
  pop();
}