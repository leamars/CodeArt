color bg = #1A1A1A;
float x = 0;
float y = 0;
float rad = 100;
int currentAngle = 0;
int count = 0;
color a = #69FFBB;
color b = #73FFEF;
color c = #A4FF8D;
color d = #EDFF71;
color e = #FCFF65;

void setup(){
  size(300, 300);
  background(bg);
  smooth();
}

void draw() {
  background(255);
  //noStroke();
  stroke(255, 255, 255, 10);
  strokeWeight(8);
  ellipseMode(CENTER);
  //fill(255, 255, 255);
  noFill();
  

  for (float i = currentAngle; i < (currentAngle+45); i++) {
   x = width/2+cos(radians(i))*rad;
   y = height/2+sin(radians(i))*rad;
   float smallRad = i%9 * 2;
   noFill();
   //float start = i/25;
   //float end = start + 45 * frameCount/20;
   float start1 = (45 - i)/5;
   float end1 = start1 + 45 + frameCount/2;
   
   float start2 = i/3;
   float end2 = start2 + 45 + frameCount/3;
   
   stroke(a);
   arc(width/2, height/2, 250, 250, radians(start1), radians(end1+i/400));
   stroke(b);
   arc(width/2, height/2, 200, 200, radians(start2), radians(end2+i/300));
   stroke(c);
   arc(width/2, height/2, 150, 150, radians(start1), radians(end1+i/100));
   stroke(e);
   arc(width/2, height/2, 100, 100, radians(start2), radians(end2+i/100));
   stroke(d);
   arc(width/2, height/2, 50, 50, radians(start1), radians(end1+i/200));
   //ellipse(x, y, smallRad, smallRad);
  }
  
  currentAngle+=45;
  count++;
}