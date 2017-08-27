var t = 0
function setup() {
  createCanvas(200, 200)
}

function draw() {
  background(255, 50)
  fill(100, 72, 144)
  noStroke()
  
  var n = noise(t)
  var x = map(n, 0, 1, 0, width)
  ellipse(x, 100, 40, 40);
  
  t+=0.01
  
}