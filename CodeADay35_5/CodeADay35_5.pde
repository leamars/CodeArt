int start = 0;
boolean light = true;
int size = 40;

void setup() {
  size(400, 400);
  smooth(3);
  rectMode(CENTER);
  noStroke();
}

void draw() {
  if (start%360 == 0) {
    light = !light;
  }
  
  if (light) {
    background(255);
  } else {
    background(37);
  }
  
  if (light) {
    for (int i = size + size/2; i < width; i+=(size*2)) {
        for (int j = size + size/2; j < height; j+=(size*2)) {
          pushMatrix();
          translate(i, j);
          fill(37);
          rect(0, 0, size-cos(radians(start))*size, size-cos(radians(start))*size);
          popMatrix();
        }
      }
    
    for (int i = size/2; i <= width; i+=(size*2)) {
        for (int j = size/2; j < height; j+=(size*2)) {
          pushMatrix();
          translate(i, j);
          fill(37);
          rect(0, 0, size-cos(radians(start))*size, size-cos(radians(start))*size);
          popMatrix();
        }
    }
  } else {
    for (int i = size + size/2; i < width; i+=(size*2)) {
        for (int j = size/2; j < height; j+=(size*2)) {
          pushMatrix();
          translate(i, j);
          fill(255);
          rect(0, 0, size-cos(radians(360-start))*size, size-cos(radians(360-start))*size);
          popMatrix();
        }
      }
    
    for (int i = size/2; i <= width; i+=(size*2)) {
        for (int j = size + size/2; j < height; j+=(size*2)) {
          pushMatrix();
          translate(i, j);
          fill(255);
          rect(0, 0, size-cos(radians(360-start))*size, size-cos(radians(360-start))*size);
          popMatrix();
        }
    }
  }
  
  start++;
}