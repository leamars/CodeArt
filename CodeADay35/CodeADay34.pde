int start = 0;
boolean light = true;
int size = 30;

void setup() {
  size(390, 390);
  smooth(3);
  rectMode(CENTER);
  noStroke();
}

void draw() {
   background(20, 131, 138);
  
  if (start%90 == 0) {
    light = !light;
  }
  
  for (int i = size/2; i <= width; i+=(size*2)) {
    for (int j = size/2; j < height; j+=(size*2)) {
      pushMatrix();
      translate(i, j);
      if (light) {
        rotate(radians(start));
      }
      fill(37);
      rect(0, 0, size, size);
      popMatrix();
    }
  }
  
  for (int i = size + size/2; i < width; i+=(size*2)) {
    for (int j = size + size/2; j < height; j+=(size*2)) {
      pushMatrix();
      translate(i, j);
      if (!light) {
        rotate(radians(start));
      }
      fill(37);
      rect(0, 0, size, size);
      popMatrix();
    }
  }
  
  start+=2;
}