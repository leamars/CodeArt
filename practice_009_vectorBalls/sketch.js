function setup() {
  
}

function draw() {
  background(255)
  var locationVector = createVector(random(width), random(height))
  var velocityVector = createVector(Math.floor((Math.random()*0.2)), Math.floor((Math.random()*0.2)))
  var mover = new Mover(locationVector, velocityVector)
  
  mover.update()
  mover.show()
}

function Mover(loc, vel) {
  this.loc = loc
  this.vel = vel
}

Mover.prototype.update = function() {
  print(this.loc)
  print(this.vel)
  this.loc.add(this.vel)
}

Mover.prototype.show = function() {
  stroke(0)
  fill(175)
  ellipse(this.loc.x, this.loc.y, 25, 25)
}