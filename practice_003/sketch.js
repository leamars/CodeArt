var towers = []
function setup() {
  createCanvas(500, 500);
  towers.push(new Tower(0, height, 20, 0));
  towers.push(new Tower(25, height, 20, 0));
  towers.push(new Tower(50, height, 20, 0));
  towers.push(new Tower(75, height, 20, 0));
  towers.push(new Tower(100, height, 20, 0));
}

function draw() {
  //background(255);
  var random = Math.floor(Math.random() * 5);
  
  towers[random].show();
  towers[random].grow(1);
  
  // rect(0, 0, 100, 100);
}

function Tower(xPos, yPos, tWidth, tHeight) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.tWidth = tWidth;
  this.tHeight = tHeight;
  
  return this;
}

Tower.prototype.show = function() {
  fill(200);
  rect(this.xPos, this.yPos, this.tWidth, this.tHeight);
}

Tower.prototype.grow = function(increment) {
  // var random = Math.floor(Math.random() * 5);
  this.tHeight = this.tHeight+increment;
  this.yPos = this.yPos - increment;
}