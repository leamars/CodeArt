var walker;

function setup() {
  createCanvas(400, 400)
  walker = new Walker(width/2, height/2);
}

function draw() {
  fill(255, 50);
  //fill(walker.x, walker.y, 120, 50)
  walker.step();
  walker.display();
}

function Walker (x, y) {
  this.x = x;
  this.y = y;
  
  return this;
}

Walker.prototype.display = function() {
  stroke(this.x, this.y, 120)
  // noStroke()
  // ellipse(this.x, this.y, this.x, this.y);
  // push()
  // rotate(this.x%50, this.y%50)
  rect(this.x, this.y, 5, 5)
  // pop()
}

Walker.prototype.step = function() {
  // FIRST VERSION
  // var choice = Math.round(Math.random() * 3);
  // print(choice);
  // if (choice == 0) {
  //   this.x++;
  // } else if (choice == 1) {
  //   this.x--;
  // } else if (choice == 2) {
  //   this.y++;
  // } else {
  //   this.y--;
  // }
  
  // SECOND VERSION
  
  var stepsize = Math.round(Math.random() * 10) + 1
  var stepX = Math.round(Math.random() * 2*stepsize) - stepsize
  var stepY = Math.round(Math.random() * 2*stepsize) - stepsize
  
  if (montecarlo()) {
    this.x+= stepX
    this.y+= stepY
  } else {
    this.x += stepX*5
    this.y += stepY*5
  }
  
}

function montecarlo() {
  var r1 = Math.floor(Math.random()*100)+1
  var p = r1
  var r2 = Math.floor(Math.random()*100)+1
  
  return (r2 < p)
}