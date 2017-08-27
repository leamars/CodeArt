function setup() {
  createCanvas(300, 300);
  background(255);
}

function draw() {
  
  push();
  // translate(width/2, height/2);
  // angleMode(DEGREES);
  // rotate(45);
  for (var i = 0; i < 20; i++) {
    var rand = floor(random(5));
    var shape = new Shape(i*20, i*20, 20);
    if (rand == 0) {
      print("dead");
      shape.dead = true;
    }
    shape.displayRect(color(100, 200, 100));
    shape.displayHour(color(100, 200, 100));
  }

  pop();
}

function Shape(x, y, size, dead) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.dead = dead;
}

Shape.prototype.displayRect = function(c1) {
  if (!this.dead) {
    stroke(255);
    strokeWeight(3);
    fill(c1);
  
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x, this.y + this.size);
    vertex(this.x + this.size, this.y + this.size);
    endShape(CLOSE);
    
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + this.size, this.y);
    vertex(this.x + this.size, this.y + this.size);
    endShape(CLOSE);
  }
}

Shape.prototype.displayHour = function(c1) {
  if (!this.dead) {
    stroke(255);
    strokeWeight(3);
    fill(c1);
    
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + this.size, this.y);
    vertex(this.x + this.size, this.y - this.size);
    endShape(CLOSE);
    
    beginShape();
    vertex(this.x + this.size, this.y);
    vertex(this.x + this.size, this.y + this.size);
    vertex(this.x + 2 * this.size, this.y);
    endShape(CLOSE);
  }
}