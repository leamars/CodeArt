// center point
var centerX = 0.0, centerY = 0.0;

//corner nodes
var nodes = 5;

//zero fill arrays
var nodeX = [
  300-(145/2),
  342.7975432332819-(145/2),
  326.4503363531613-(145/2),
  273.5496636468387-(145/2),
  257.2024567667181-(145/2)
];
var nodeY = [
  155,
  186.09423525312738,
  236.40576474687265,
  236.40576474687265,
  186.09423525312735
];


// soft-body dynamics
var organicConstant = 0.2;

function setup() {
  createCanvas(1000, 1000);

  //center shape in window
  centerX = width/2;
  centerY = height/2;

  frameRate(30);
}

function draw() {
  //fade background
  noStroke();
  fill(0, 100);
  rect(0,0,width, height);
  
  // stroke(255);
  // point(nodeX[0], nodeY[0]);
  // point(nodeX[1], nodeY[1]);
  // point(nodeX[2], nodeY[2]);
  // point(nodeX[3], nodeY[3]);
  // point(nodeX[4], nodeY[4]);
  
  push();
  rotate(frameCount/200.0);
  drawShape();
  pop();
}

function drawShape() {

  // draw polygon
  curveTightness(organicConstant);
  fill(255);
  beginShape();
  
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i] + 2, nodeY[i] + 2);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i] + 2, nodeY[i] + 2);
  }
  
  endShape(CLOSE);
  
  fill(200, 100, 150);
  beginShape();
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  
  

  endShape(CLOSE);
}
