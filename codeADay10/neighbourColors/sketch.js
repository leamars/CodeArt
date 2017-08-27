var from;
var to;
var interA;
var interB;
var once = true;
function setup() {
  createCanvas(300, 300)
  
  from = color(218, 164, 32, 20);
  to = color(72, 61, 139, 20);
  interA = lerpColor(from, to, .33);
  interB = lerpColor(from, to, .66);
  
  noStroke();
  background(255);
}

function draw() {

  if (once) {
    push()
    translate(-20, 20);
    rotate(150);
    for (var i = 50; i < 250; i += 18) {
      if (i <= 130) {
        fill(from);
      } else {
        fill(interA);
      }
      for (var j = 50; j < 250; j += 18) {
        rect(i, j, 15, 15);
      }
    }
    pop()
     
    push()
    translate(60, 40);
    rotate(-150);
    for (var i = 50; i < 250; i += 18) {
      if (i <= 130) {
        fill(interB);
      } else {
        fill(to);
      }
      for (var j = 50; j < 250; j += 18) {
        rect(i, j, 15, 15);
      }
    }
    pop()
  }
  
  // once = false;
  
  from = color(218, 164, 32);
  to = color(72, 61, 139);
  interA = lerpColor(from, to, .33);
  interB = lerpColor(from, to, .66);
}