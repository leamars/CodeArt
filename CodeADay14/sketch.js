var posX;
var posY;
var speedY= 4;
var speedX = 3;

var ball;

function setup() {
  posX = width/2;
  posY = height/2;
  createCanvas(300, 300)
  smooth();
  ball = new Ball(posX, posY, 15, new Col(13, 190, 106));
}

function draw() {
  noStroke();
  background(ball.c.r, ball.c.g, ball.c.b, 50);
  Blue();
  Green();
  Yellow();
  Red();
  ball.display();
  // ball.collide();
  ball.move();
}

function Col(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

function Ball(x, y, rad, c) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.c = c;
}

Ball.prototype.display = function() {
  stroke(255);
  // fill(249, 242, 227);
  fill(this.c.r, this.c.g, this.c.b);
  ellipse(this.x, this.y, this.rad, this.rad);
}

Ball.prototype.move = function() {
  this.x = this.x + speedX;
  this.y = this.y + speedY;
 
  if (this.x > width-15) {
    speedX = speedX* -1;
    this.c = new Col(13, 190, 106);
  }
 
  if (this.x < 0+15) {
    speedX = speedX* -1;
    this.c = new Col(190, 13, 70);
  }
 
  if (this.y > height-15) {
    speedY= speedY* -1;
    this.c = new Col(230, 219, 0);
  }
   
  if (this.y < 0+15) {
    speedY= speedY*-1;
    this.c = new Col(13, 60, 190);
  }

}

Ball.prototype.collide = function() {
    for (var i = 0; i < 1; i++) {
      var dx = this.x;
      var dy = this.y;
      var distance = sqrt(dx*dx + dy*dy);
      var minDist = this.rad/2 + this.rad/2;
      if (distance < minDist) { 
        var angle = atan2(dy, dx);
        var targetX = x + cos(angle) * minDist;
        var targetY = y + sin(angle) * minDist;
        var ax = (targetX - this.x) * spring;
        var ay = (targetY - this.y) * spring;
        vx -= ax;
        vy -= ay;
      }
    }   
  }

function Blue() {
  fill(13, 60, 190);
  beginShape();
  vertex(0, 0);
  vertex(10, 10);
  vertex(width-10, 10);
  vertex(width, 0);
  endShape(CLOSE);
}

function Green() {
  fill(13, 190, 106);
  beginShape();
  vertex(width, 0);
  vertex(width-10, 10);
  vertex(width-10, height-10);
  vertex(width, height);
  endShape(CLOSE);
}

function Yellow() {
  fill(230, 219, 0);
  beginShape();
  vertex(0, height);
  vertex(10, height-10);
  vertex(width-10, height-10);
  vertex(width, height);
  endShape(CLOSE);
}

function Red() {
  fill(190, 13, 70);
  beginShape();
  vertex(0, 0);
  vertex(10, 10);
  vertex(10, height-10);
  vertex(0, height);
  endShape(CLOSE);
}