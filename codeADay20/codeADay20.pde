float start = 0;
color a, b;
PImage shape, image;
float in = 0;
float out = 0;

void setup() {
  size(300, 300, P3D);
  background(0);
  ellipseMode(CENTER);
  stroke(255);
  noFill();
  frameRate(12);
  a = color(200, 125, 25);
  b = color(45, 200, 88);
}

void draw() {
  
  in += 0.005;
  color c = lerpColor(a, b, in);
  
  out += 0.005;
  color c1 = lerpColor(b, a, out);
  
  background(255);
  gradientBackground(width, height, a, b);
  colorCircleOut(c1);
  
  colorCircle(c);
}

void colorCircleOut(color col) {
  pushMatrix();
  strokeWeight(10);
  stroke(col);
  translate(150, 150, 0);
  rotateX(start+=(PI/32));
  ellipse(0, 0, 200, 200);
  popMatrix();
}

void colorCircle(color col) {
  pushMatrix();
  translate(150, 150, 0);
  rotateY(start+=(PI/32));
  stroke(col);
  ellipse(0, 0, 180, 180);
  popMatrix();
}

void gradientBackground(float wid, float hei, color start, color end) {
  for (int i = 0; i < wid/4; i++) {
    float interp = i/wid*4;
    color c = lerpColor(start, end, interp);
    stroke(c);
    line(0, i, wid/4, i);
  }
}