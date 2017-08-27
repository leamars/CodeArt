function setup() {
  createCanvas(300, 300);
  background(255);
}

function draw() {
  var s = new Shape(width/2, height/2, 40);
  s.display();
}

function Shape(x, y, side) {
  this.x = x;
  this.y = y
  this.side = side;
}

Shape.prototype.display = function() {
  
  stroke(255);
  strokeWeight(5);
  fill(255, 0, 0);
  
  // beginShape();
  // vertex(this.x, this.y);
  // vertex(this.x + this.side/2, this.y - this.side*0.8);
  // vertex(this.x + this.side, this.y);
  // vertex(this.x + this.side/2, this.y + this.side*0.8);
  // endShape(CLOSE);
  
  beginShape();
  vertex(this.x + this.size *0.8, this.y);
  vertex(this.x + this.size *0.8 + this.side, this.y - this.side*0.8);
  vertex(this.x + this.side*0.8, this.y);
  vertex(this.x + this.side/2, this.y - this.side*0.8);
  endShape(CLOSE);
  
  // beginShape();
  // vertex(this.x, this.y);
  // vertex(this.x + this.side/2, this.y - this.side*0.8);
  // vertex(this.x + this.side, this.y);
  // vertex(this.x + this.side/2, this.y + this.side*0.8);
  // endShape(CLOSE);
}