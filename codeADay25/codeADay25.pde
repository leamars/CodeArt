float degrees = 0;
float minSide = 225;
float maxSide = minSide*sqrt(2);
float side = minSide;
boolean grow = true;
float hue = 0;
PImage bg;
void setup() {
  size(300, 300);
  background(255);
  frameRate(20);
  smooth(8);
  bg = loadImage("images/wallBg7.png");
}

void draw() {
  blendMode(REPLACE);
  rectMode(CENTER);
  colorMode(RGB);
  background(255);
  colorMode(HSB);
  //fill(hue+=0.5, 100, 100, 30);
  strokeWeight(1.5);
  stroke(hue, 100, 100);
  translate(width/2, height/2);
  // ENTIRE ROTATION
  if (grow) {
  //print(frameRate/10 + " ");
  rotate(radians(degrees+=4 + frameRate/20));
  } else {
  rotate(radians(degrees+=4 - frameRate/20));
  }
  
  rotate(radians(degrees+=2));
  print(degrees/360 + " ");
  stroke(degrees%360, 150, 200);
  strokeWeight(10);
  
  strokeWeight(1.5);
  for (int i = 1; i < 15; i++) {
    pushMatrix();
    rotate(radians(degrees+(45+i+5)*i));
    stroke(hue%360, 150, 200, 100);
    if (i%2 == 0) {
      fill(hue%360, 150, 200, 100);
    } else {
      fill(255);
    }
    rect(0, 0, side-20*i, side-20*i);
    popMatrix();
   }   
   
   if (grow) {
     side++;
     if (side >= maxSide) {
       grow = false;
     }
   } else {
     side--;
     if (side <= minSide) {
       grow = true;
     }
   }
   
   hue++;
   if (hue > 360) {
     hue = 0;
   }
}