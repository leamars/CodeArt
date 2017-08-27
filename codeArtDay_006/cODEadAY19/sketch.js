var rot = 0;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  push();
  translate(-500, -500);
  rectMode(CENTER);
  background(0, 20, 20, 80);
  Kalo(0, 120, rot, width, height, 46, 119, 96);
  Kalo(0, 40, rot+HALF_PI, width, height, 24, 157, 104);
  Kalo(0, 80, -rot-HALF_PI, width, height, 235, 146, 8);
  Kalo(0, 80, rot+HALF_PI, width, height, 235, 146, 8);
  rot++;
  pop();
}

function Kalo(r, size, rott, wid, hei, rC, g, b) {
  if (r < 4) {
    push();
    noStroke();
    fill(rC, g, b, 50);
    
    translate(wid, hei);
    rotate(rott*TWO_PI/360);
  
    rect(0, 0, size, size);
    
    rotate(rott*PI/360);
    rect(0, 0, size, size);
    
    r++;
    
    Kalo(r, size*0.6, rott, wid*0.35, hei/2, rC++, g--, b++);
    Kalo(r, size*0.6, -rott, wid*0.35, -hei/2, rC++, g+=2, b++);
    
    pop();
  }
}