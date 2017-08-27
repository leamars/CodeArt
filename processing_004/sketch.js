var length = 0;
var posX = [];
var posY = [];

function setup() {
  createCanvas(300, 200);
  background(255);
  smooth();
  
  rectMode(CENTER);
  stroke(128);
  //rect(35, 35, 50, 50);
}

function draw() {

  //arc(mouseX, mouseY, mouseX*1.25, mouseY*1.25, 0, PI);
  noStroke();
  if (posX.length > 50) {
    posX = [];
  }
  
   if (posY.length > 50) {
    posY = [];
  }
  posX.push(pmouseX);
  posY.push(pmouseY);
  
  for (var i = 0; i < 50; i++) {
    fill(i*4, 0, i*6, i*0.3);
    ellipse(posX[i], posY[i], 2*i, 2*i);
  }
}