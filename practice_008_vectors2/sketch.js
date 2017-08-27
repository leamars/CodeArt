function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);
  
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  mouse.sub(center)
  mouse.normalize()
  
  push()
  mouse.mult(50);
  translate(width/2, height/2);
  line(0, 0, mouse.x, mouse.y)
  pop()
}