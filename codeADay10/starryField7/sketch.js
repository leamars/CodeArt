var start = 0;
function setup() {
  createCanvas(300, 300);
  smooth();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(start+=10);
  angleMode(RADIANS);
  noStroke()
  fill('magenta');
  var rad = 50;
  for (var i = 0; i < 360; i++) {
    
    rad += 0.5;
    var x = 50 + sin(i)*rad;
    var y = 50 + cos(i)*rad;
    ellipse(x, y, 1, 1);
  }
  
  fill('green');
  for (var i = 0; i < 360; i++) {
    
    rad -= 0.5;
    var x = 150 + sin(i)*rad;
    var y = 150 + cos(i)*rad;
    ellipse(x, y, 1, 1);
  }
  
  var rad2 = 50;
  
  fill('blue');
  for (var i = 0; i < 360; i++) {
    
    rad2 -= 0.5;
    var x = 150 + sin(i)*rad2;
    var y = 150 + cos(i)*rad2;
    ellipse(x, y, 1, 1);
  }
  
  fill('yellow');
  for (var i = 0; i < 360; i++) {
    
    rad2 += 0.5;
    var x = 0 + sin(i)*rad2;
    var y = 0 + cos(i)*rad2;
    ellipse(x, y, 1, 1);
  }
}