int fStart = 0;
int fCount = 150;
int fDiv = 1;
int maxRadHorizontal = 100;
int maxRadVertical = 100;

void setup() {
  background(60);
  size(300, 300);
  smooth(8);
  frameRate(100);
}

void draw() {
  colorMode(RGB, 255, 255, 255, 255);
  stroke(255, 50);
  translate(width/2, height/2);
  print(frameCount + " ");
  if (frameCount > fCount) {
    maxRadHorizontal-=1;
    if (maxRadHorizontal == 1) {
      frameCount = 0;
    }
  } else {
    maxRadHorizontal+=1;
  }
  float grey = 255/maxRadHorizontal;
  //noFill();
  colorMode(HSB);
  background(maxRadHorizontal/2, 100, 200, 100);
  fill(maxRadHorizontal, 100, 200, 100);
  strokeWeight(10);
  //noStroke();
  ellipse(0, 0, maxRadHorizontal, maxRadVertical);
  ellipse(0, 0, maxRadVertical, maxRadHorizontal);
  ellipse(0, 0, maxRadHorizontal/2, maxRadVertical/2);
  ellipse(0, 0, maxRadVertical/2, maxRadHorizontal/2);
  ellipse(0, 0, maxRadHorizontal, maxRadVertical);
  ellipse(0, 0, maxRadVertical, maxRadHorizontal);
  ellipse(0, 0, maxRadHorizontal*1.5, maxRadVertical*1.5);
  ellipse(0, 0, maxRadVertical*1.5, maxRadHorizontal*1.5);
}