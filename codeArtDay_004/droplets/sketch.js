var rows = [];
var columns = [];
var step = 5;
var once = true;
var drop;
var droplets = [];
var water = [];
var waterLevel = 0;
var g = 255;
var b = 0;

function setup() {
  createCanvas(300, 300);
  background(0);
  
  for (var i = 0; i < 300/step; i++) {
    rows.push(i*step);
    columns.push(i*step);
  }
  
  for (var i = 0; i < columns.length; i = i+step) {
      droplets.push(new Drop(step/2 + (i * step), 0, step/2 + (i * step), step));
      for (var j = 0; j < rows.length; j = j+step) {
        
      }
    }

}

function draw() {
  background(0);
  
  for (var i = 0; i < columns.length/step; i++) {
      droplets[i].show();
      droplets[i].drip();
  }
}

function Drop(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.dead = false;
}

Drop.prototype.drip = function() {
  this.y1 += step/2;
  this.y2 += step/2;
  this.gone();

  if (!this.dead) {
    this.show();
  } else {
    water.push(waterLevel++);
    showWater();
    g = 255;
    b = 0;
  }
}

Drop.prototype.show = function() {
  noStroke();
  fill(233);
  rect(this.x1, this.y1, this.x2, this.y2);
}

Drop.prototype.gone = function() {
  if (this.y1 > height) {
    this.dead = true;
  }
}

function showWater() {
  for (var i = 0; i < water.length; i++) {
    if ((g - i*1.2) <=0) {
      b = b + i*1.2;
      stroke(0, 0, b);
      print("blue" + b);
    } else {
      g = g - i*1.2;
      stroke(0, g, 0);
    }
    line(0, height - 1 - i, width, 300 - 1 -i);
  }
}