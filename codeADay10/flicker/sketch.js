var tops = [];
var bottoms = [];
var twice = 0;
var colors = [];
function setup() {
  createCanvas(300, 300);

  colors.push(new Color(76, 0, 23));
  colors.push(new Color(114, 19, 48));
  colors.push(new Color(190, 95, 124));
  colors.push(new Color(255, 215, 17));
  colors.push(new Color(80, 1, 60));
  colors.push(new Color(249, 234, 0));

  for (var i = 25; i < 275; i+=25) {
    for (var j = 50; j < 250; j+= 25) {
      var r = floor(random(colors.length-1));
      tops.push(new Shape(i, j, 35, r));
      bottoms.push(new Shape(i, j, 35, r));
    }
  }
}

function draw() {
    background(0);
    push();
    translate(-20, 20);
    rotate(150);
    for (var i = 0; i < tops.length; i++) {
        tops[i].display(colors[i%(colors.length-1)]);
    }
    pop();

    push();
    translate(60, 40);
    rotate(-150);
    for (var i = 0; i < bottoms.length; i++) {
        bottoms[i].display(colors[i%(colors.length-1)]);
    }
    pop();
}

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

function Shape(x, y, size, choice) {
  
  this.a = 255;
  this.inc = random(0.3, 5);
  this.c = new Color(0, 0, 0);
  this.col = floor(random(colors.length-1));
  
  this.x = x;
  this.y = y;
  this.size = size;
  
  this.choice = choice;
}

Shape.prototype.display = function() {
  stroke(0);
  strokeWeight(4);
  
  this.a += this.inc;
  if (this.a < 0) {
    this.inc = -this.inc;
    this.c = colors[(this.col++%(colors.length-1))];
  }
  
  if (this.a > 255) {
    this.inc = -this.inc;
  }
  
  fill(this.c.r, this.c.g, this.c.b, this.a);
  rect(this.x, this.y, this.size, this.size);
  
  if (this.choice == 0) {
  beginShape();
    vertex(this.x, this.y);
    vertex(this.x + this.size, this.y);
    vertex(this.x + this.size, this.y + this.size);
    endShape(CLOSE);
  }
  else if (this.choice == 1) {
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x, this.y + this.size);
    vertex(this.x + this.size, this.y + this.size);
    endShape(CLOSE);
  }
  else if (this.choice == 3) {
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x, this.y + this.size);
    vertex(this.x + this.size/2, this.y + this.size/2);
    endShape(CLOSE);
  }
  else if (this.choice == 4) {
    beginShape();
    vertex(this.x + this.size, this.y);
    vertex(this.x + this.size, this.y + this.size);
    vertex(this.x + this.size/2, this.y + this.size/2);
    endShape(CLOSE);
  }
}