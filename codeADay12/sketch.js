var karoColor;
var karoGrid;
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var row6 = [];
var row7 = [];
var row8 = [];

var rows = [];
var randKaro;

var a = 0;

var yoff = 0;
var yHeight = 300;

function setup() {
  createCanvas(300, 300);
  background(255, 242, 242);
  karoColor = color(223, 151, 156)
  karoGrid = new KaroGrid(width, height, 0);
  karoGrid.display();
  
  randKaro = new Karo (0, 0, 0, false, false);
  
  for (var i = 5; i < width; i+=20) {
      var karo = new Karo(i+=5, 0, 10, false, false);
      row1.push(karo);
  }
  
  for (var i = 5; i < width; i+=20) {
      var karo = new Karo(i+=5, 0, 10, false, false);
      row1.push(karo);
  }
  
  for (var i = 25; i < width - 25; i+=20) {
      var karo = new Karo(i+=5, 25, 10, false, false);
      row2.push(karo);
      karo.display(karoColor);
  }
  
  for (var i = 50; i < width; i+=20) {
      var karo = new Karo(i+=5, 50, 10, false, false);
      row3.push(karo);
  }
  
  for (var i = 75; i < width-50; i+=20) {
      var karo = new Karo(i+=5, 75, 10, false, false);
      row4.push(karo);
  }
  
  for (var i = 125; i < width-100; i+=20) {
      var karo = new Karo(i+=5, 100, 10, false, false);
      row5.push(karo);
  }
  
  for (var i = 100; i < width-125; i+=20) {
      var karo = new Karo(i+=5, 125, 10, false, false);
      row6.push(karo);
  }
  
  for (var i = 150; i < width-100; i+=20) {
      var karo = new Karo(i+=5, 150, 10, false, false);
      row7.push(karo);
  }
  
  for (var i = 150; i < width-125; i+=20) {
      var karo = new Karo(i+=5, 175, 10, false, false);
      row8.push(karo);
  }
  
  rows.push(row1);
  rows.push(row2);
  rows.push(row3);
  rows.push(row4);
  rows.push(row5);
  rows.push(row6);
  rows.push(row7);
  rows.push(row8);
  
  var randRow = floor(random(rows.length));
  var randCol = floor(random(rows[randRow].length));
  
  randKaro = rows[randRow][randCol];
}

function draw() {
  // var karo = new Karo(width/2, height/2, 20);
  // karo.display();
  background(255, 242, 242);
  // background(168, 100, 100);
  karoGrid.move();
  
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      var karo = rows[i][j];
      if (!karo.dead) {
        karo.display(karoColor);
      }
    }
  }
  
  if (!randKaro.dripping) {
    randKaro.dripping = true;
  } else if (!randKaro.dead) {
    randKaro.drip();
    randKaro.drop();
  }  else {
    a = 0;
    var randRow = floor(random(rows.length));
    var randCol = floor(random(rows[randRow].length));
    randKaro = rows[randRow][randCol];
  }
  
  makeRiver();
  
}

function makeRiver() {
  print("river");
  beginShape();
    var xoff = 0;       // Option #1: 2D Noise
    // var xoff = yoff; // Option #2: 1D Noise
    
    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 10) {
      // Calculate a y value according to noise, map to 
      
      // Option #1: 2D Noise
      var y = map(noise(xoff, yoff), 0.5, 1, yHeight,300);
  
      // Option #2: 1D Noise
      // var y = map(noise(xoff), 0, 1, 200,300);
      
      // Set the vertex
      vertex(x, y); 
      // Increment x dimension for noise
      xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function Karo (x, y, size, dead, dripping) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.dead = dead;
  this.dripping = false;
}

Karo.prototype.display = function(col) {
  noStroke();
  fill(col);
  beginShape();
  vertex(this.x, this.y + this.size/2);
  vertex(this.x + this.size/2.5, this.y + this.size);
  vertex(this.x + this.size*0.82, this.y + this.size/2);
  vertex(this.x + this.size/2.5, this.y);
  endShape(CLOSE);
}

Karo.prototype.drip = function() {
  // this.col = karoColor;
  // fill(this.col);
  ellipse(this.x + this.size/2.5, this.y + this.size * 0.65, this.size * 0.82, this.size * 0.82);
}

Karo.prototype.drop = function() {
  this.y+=10;
  a+=5;
  this.y = this.y + a;
  if (this.y + this.size >= height) {
    this.dead = true;
    yHeight -= 3;
  }
}

function KaroGrid(wid, hei, start) {
  this.start = start;
  this.wid = wid;
  this.hei = hei;
}

KaroGrid.prototype.display = function() {
  for (var i = this.start; i < this.wid; i+=5) {
    for (var j = this.start; j < this.hei; j+=5) {
      var karo = new Karo(i, j, 3);
      karo.display(color(255, 255, 255));
    }
  }
}

KaroGrid.prototype.move = function() {
  push();
  if (this.start == 0) {
    this.start = 1;
  } else if (this.start == 1) {
    this.start = 0;
  }
  translate(this.start, 0);
  this.display();
  pop();
}

function River() {
  
}

