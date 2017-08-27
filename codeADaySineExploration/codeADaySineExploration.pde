color bg = #1A1A1A;
int a = 0;

void setup() {
  background(bg);
  size(300, 300);
}

void draw() {
  background(bg);
  noStroke();
  fill(255, 255, 255);
  
  for (int i = 0; i < width; i+=10) {
    ellipse(i, height/1.5+sin(radians(a))*75, 10, 10);
    a+=25;
  }
}