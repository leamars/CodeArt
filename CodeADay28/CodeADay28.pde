int start1 = 275;
int end1 = 455;
int start2 = 85;
int end2 = start1;
void setup() {
  size(300, 300);
  background(150);
  smooth();
}

void draw() {
  background(150);
  translate(width/2, height/2);
  noFill();
  strokeWeight(5);
  stroke(255);
  arc(0, 0, 50, 50, radians(start1++), radians(end1));
  stroke(150);
  arc(0, 0, 50, 50, radians(start2), radians(end2++));
}