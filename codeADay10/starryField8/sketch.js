var start = 0;
var alph = 0;
var alph1 = 0;
function setup() {
  createCanvas(300, 300);
  smooth();
  background(108, 56, 81);
}

function draw() {
  if (start < 500) {
    background(56, 107, 108, alph);
    // background(0, 0, 0, alph);
    alph += 0.5
  } else if (start > 1000 && !(start > 2000)) {
    // background(108, 56, 81, alph);
    background(108, 56, 81, alph1);
    alph1 += 0.5;
  } else if (start > 2000) {
    start = 0;
  }
  
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(start+=1);
  angleMode(RADIANS);
  noStroke()
  
  fill(175, 13, 89);
  var rad = 50;
  for (var i = 0; i < 360; i++) {
    
    rad += 0.5;
    var x = 0 + sin(i)*rad;
    var y = 0 + cos(i)*rad;
    ellipse(x, y, 0.5, 0.5);
  }
  
  fill(253, 0, 119);
  for (var i = 0; i < 360; i++) {
    
    rad -= 0.5;
    var x = 0 + sin(i)*(rad + 5);
    var y = 0 + cos(i)*(rad + 5);
    ellipse(x, y, 0.5, 0.5);
  }
  
  var rad2 = 50;
  
  fill(226, 187, 205);
  for (var i = 0; i < 360; i++) {
    
    rad2 -= 0.5;
    var x = 0 + sin(i)*rad2;
    var y = 0 + cos(i)*rad2;
    ellipse(x, y, 0.5, 0.5);
  }
  
  fill(238, 231, 235);
  for (var i = 0; i < 360; i++) {
    
    rad2 += 0.5;
    var x = 0 + sin(i)*rad2;
    var y = 0 + cos(i)*rad2;
    ellipse(x, y, 0.5, 0.5);
  }
  
  start++;
}