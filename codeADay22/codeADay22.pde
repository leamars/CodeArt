int rot = 0;
float z = 0;
void setup() {
  size(800, 800, P3D);
  background(255);
  //frameRate(10);
  smooth();
  //makeCircle();
}

void draw() {
    
    pushMatrix();
    //rotateX(radians(rot));
    //rotateY(radians(rot));
    rotateZ(radians(rot));
    rotateX(radians(rot*10));
    rectMode(CENTER);
    rect(400, 400, 20, 20);
    popMatrix();
    rot++;
    z = z + 0.1;
}

void makeCircle() {
  for (int i = 0; i < 100; i++) {
    pushMatrix();
    translate(400, 400, z);
    rectMode(CENTER);
    rotate(radians(i*10));
    rect(50 + cos(i), 50+sin(i), 30, 30);
    popMatrix();
  }
}