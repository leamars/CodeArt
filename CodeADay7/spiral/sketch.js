function setup() {
  createCanvas(300, 300);
  background(255);
  fill(200);
}

function draw() {
  beginShape();
  vertex(width/2, height/2);
  makeShape(width/2, height/2, 50);
  endShape();
}

function makeShape(x1, y1, length) {
  vertex(x1 + length, y1);
  vertex(x1 + length, y1 + length);
  vertex(x1, y1 + length);
  vertex(x1, y1 + 5);
  if (length > 5) {
    makeShape(x1, y1, length - 5);
  }
}