var w;

function setup() {
  createCanvas(200, 200);
  noFill();
  background(51);
  w = new Walker(25);
}

function draw() {
  w.display();
  w.update();
  print(w.wHeight);
}

function Walker(wRad) {
  this.pos = createVector(random(0, width), 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1);
  this.wRad = wRad;

  noStroke();
  fill(255, 255, 255, 5);
  
  this.display = function() {
    ellipse(this.pos.x, this.pos.y, this.wRad, this.wRad);
  }
  
  this.update = function() {
    this.pos = this.pos.add(this.vel);
    this.vel = this.vel.add(this.acc);
    this.wRad = this.wRad + random(-15, 15);
    if (this.pos.y > width) {
      this.pos = createVector(random(0, width), 0);
    }
  }
}