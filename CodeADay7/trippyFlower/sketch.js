function setup() {
  createCanvas(300, 300);
  smooth();
  rectMode(CENTER);
  background(255);
  stroke(255, 50);
}

function draw() {
  translate(width/2, height/2);
  for (var s = 200; s > 0; s = s - 10) {
    var j = s;
    fill(200 + ((pmouseX - s) % 50), 200 - (pmouseY % 200), 0 - ((pmouseX + s) % 255), 80 - s/2);
    rotate((mouseX + mouseY) / 200.0);
    rect(0, 0, s, s);
  }
}