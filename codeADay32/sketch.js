var start = 0;


function setup() {
  createCanvas(300, 300);
  background(255);
}

function draw() {
  var bg = map(start, 0, 360*4, 0, 255);
  background(0, 0, bg, 5);
  translate(width/2, height/2);
  if (start >= 360*4) {
    start = 0;
  }
  
  strokeWeight(2);
  // colorMode(HSB, 255);
  stroke(0, 200, 200);
  // line(sin(radians(360-start))*100, cos(radians(360-start))*100, 
  // sin(radians(360-start))*80, cos(radians(360-start))*80);
  
  // stroke(0, 0, 0);
  // line(sin(radians(180-start))*100, cos(radians(180-start))*100, 
  // sin(radians(180+start))*80, cos(radians(180+start))*80);
  
  // push();
  // rotate(radians(90));
  // line(sin(radians(180-start))*100, cos(radians(180-start))*100, 
  // sin(radians(180+start))*80, cos(radians(180+start))*80);
  // pop();
  
  push();
  rotate(radians(180));
  line(sin(radians(20-start))*120, cos(radians(230-start))*120, 
  cos(radians(30+start))*90, sin(radians(start))*90);
  pop();
  
  // push();
  // rotate(radians(270));
  // line(sin(radians(180-start))*100, cos(radians(180-start))*100, 
  // sin(radians(180+start))*80, cos(radians(180+start))*80);
  // pop();
  
  // stroke(255, 0, 255);
  // line(sin(radians(start))*50, cos(radians(start))*50, 
  // sin(radians(start))*20, cos(radians(start))*20);
  
  // print(frameCount);
  start+=1+(frameCount/500);
}