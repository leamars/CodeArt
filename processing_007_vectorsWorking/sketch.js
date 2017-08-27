var loc, speed;

function setup() {
  createCanvas(200, 200, WEBGL)
  
  loc = createVector(0, 0, 0);
  speed = createVector(1, 3.3, 5);
}

function draw() {
  loc.add(speed);

  print(loc)
  background(255);
  
  if ((loc.x > 200) || (loc.x < -200)) {
    speed.x = speed.x * -1
  } else if ((loc.y > 200) || (loc.y < -200)) {
    speed.y = speed.y * -1
  } else if ((loc.z > 200) || (loc.z < -200)) {
    speed.z = speed.z * -1
  }
  
  fill(50)
  stroke(0)
  push();
  translate(loc.x, loc.y, loc.z)
  sphere(100);
  pop();
}