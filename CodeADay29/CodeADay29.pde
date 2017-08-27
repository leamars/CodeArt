int big1 = 100;
int big2 = 75;
int small1 = 50;
int small2 = 25;

float startRadBottom = 0;
void setup() {
  size(300, 300);
  smooth(8);
}

void draw() {
  translate(width/2, height/2);
  noFill();
  strokeWeight(5);
  stroke(255);
  
  arc(0, 0, big1, big1, radians(startRadBottom), PI/2);
  arc(0, 0, big2, big2, 0, PI/2);
  arc(0, 0, small1, small1, 0, PI/2);
  arc(0, 0, small2, small2, 0, PI/2);
  
  arc(0, 0, big1, big1, PI, PI*3/2);
  arc(0, 0, big2, big2, PI, PI*3/2);
  arc(0, 0, small1, small1, PI, PI*3/2);
  arc(0, 0, small2, small2, PI, PI*3/2);
  
  startRadBottom = startRadBottom - 0.5;
}