function setup() {
  createCanvas(200, 200);
  background(255);
  noStroke();
  smooth();
}

function draw() {
  print(frameCount);
  if (frameCount % 10 == 0) {
    fill(frameCount * 3 % 255, frameCount * 5 % 255, 
    frameCount * 7 % 255);
    
    push();
    translate(100, 100);
    rotate(radians(frameCount*2%360));
    scale(2.0);
    rect(0, 0, 80, 20);
    pop();
  }
}