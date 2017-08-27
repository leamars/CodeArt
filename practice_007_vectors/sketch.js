var location, speed;

function setup() {
  createCanvas(200, 200)
  
  location = createVector(100, 100, 0);
  speed = createVector(1, 3.3, 0);
}

function draw() {
  //location.add(speed);

  print(location)
  
  if ((location.x > width) || (location.x < 0)) {
    speed.x = speed.x * -1
  } else if ((location.y > height) || (location.y < 0)) {
    speed.y = speed.y * -1
  }
  
  fill(50)
  stroke(0)
  ellipse(location.x, location.y, 25, 25);
}