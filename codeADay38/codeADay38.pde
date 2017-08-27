
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
  //if (start%720 == 0) {
  //  light = !light;
  //}
  
  //if (light) {
  //  background(255);
  //} else {
  //  background(37);
  //}
  
  background(255);
  
  int firstPass = size + size/2;
  int secondPass = size/2;
  int thirdPass = size/2;
  int fourthPass = size + size/2;
  
  if (!light) {
    firstPass = size + size/2;
    secondPass = size + size/2;
    thirdPass = size/2;
    fourthPass = size/2;
  }
    for (int i = firstPass; i < width; i+=(size*2)) {
       for (int j = secondPass; j < height; j+=(size*2)) {
         pushMatrix();
         translate(i, j);
         if (light) {
           fill(37);
         } else {
           fill(255);
         }
         rect(0, 0, cos(radians(360-start))*size, cos(radians(360-start))*size, cos(radians(start))*size);
         popMatrix();
       }
     }
    
    for (int i = thirdPass; i <= width; i+=(size*2)) {
       for (int j = fourthPass; j < height; j+=(size*2)) {
         pushMatrix();
         translate(i, j);
         if (light) {
           fill(37);
         } else {
           fill(255);
         }
         rect(0, 0, cos(radians(360-start))*size, cos(radians(360-start))*size, cos(radians(start))*size);
         popMatrix();
       }
    }
  start+=1;
}