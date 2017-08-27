var blocks = [];
var step = 30;
var k = 0;
var gap = 5;
var row = 0;
var vibraphone;
function setup() {
	createCanvas(500, 500);
	background(255);
	for (var i = 0; i <= width/step; i++) {
		for (var j = 0; j <= height/step; j++) {
			blocks.push(new Block(i*step, j*step, step));
		}
	}
	vibraphone = loadSound("vibraphone.wav");
	vibraphone.playMode("sustain");
}

function draw() {
  if (k < blocks.length) {
  	var block = blocks[k];
  	block.show();
  } else {
    if (row == blocks.length) {
        row = 0;
      }
    if (keyIsDown(LEFT_ARROW)) {
      block = blocks[row];
      var h = floor(random(48, 92));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(RIGHT_ARROW)) {
      block = blocks[row];
      var h = floor(random(90, 133));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(UP_ARROW)) {
      block = blocks[row];
      var h = floor(random(158, 208));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(DOWN_ARROW)) {
      block = blocks[row];
      var h = floor(random(130, 160));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(ALT)) {
      block = blocks[row];
      var h = floor(random(205, 251));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(SHIFT)) {
      block = blocks[row];
      var h = floor(random(249, 279));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(ENTER)) {
      block = blocks[row];
      var h = floor(random(276, 305));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(ALT)) {
      block = blocks[row];
      var h = floor(random(303, 335));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } else if (keyIsDown(BACKSPACE)) {
      block = blocks[row];
      var h = floor(random(333, 360));
      var s = floor(random(90, 100));
      var l = floor(random(55, 75));
      block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
      block.showColor();
      row = row + 1;
    } 
  }
  k++;
}

function Block(x, y, a, r, g, b, c) {
	this.x = x;
	this.y = y;
	this.a = a;
	this.c = c;
}

Block.prototype.show = function() {
  noStroke();
  var grey = floor(random(255));
  this.r = grey;
  this.g = grey;
  this.b = grey;
  fill(grey, grey, grey);
	rect(this.x + gap/2, this.y + gap/2, this.a - gap, this.a - gap);
}

Block.prototype.showColor = function() {
  noStroke();
  // print("R: " + this.r + "G: " + this.g + "B: " + this.b);
  fill(this.c);
	rect(this.x + gap/2, this.y + gap/2, this.a - gap, this.a - gap);
}

Block.prototype.change = function() {
  noStroke();
  fill(this.r - 50, this.g - 50, this.b - 20);
	rect(this.x + gap/2, this.y + gap/2, this.a - gap, this.a - gap);
}

function mousePressed() {
  for (var i = 0; i < 10; i++) {
      var block = blocks[floor(random(blocks.length))];
      block.change();
    }
}

function keyPressed() {
  if (key != "Q") {
  if (keyCode == LEFT_ARROW) {
    //c
    vibraphone.rate(1);
  } else if (keyCode == RIGHT_ARROW) {
    //d
    vibraphone.rate(1.1);
  } else if (keyCode == DOWN_ARROW) {
    //e
    vibraphone.rate(1.25);
  } else if (keyCode == UP_ARROW) {
    //f
    vibraphone.rate(1.31);
  } else if (keyCode == ALT) {
    //g
    vibraphone.rate(1.46);
  } else if (keyCode == SHIFT) {
    //a
    vibraphone.rate(1.62);
  } else if (keyCode == ENTER) {
    //h
    vibraphone.rate(1.855);
  } else if (keyCode == BACKSPACE) {
    //c
    vibraphone.rate(1.958);
  } 
  
  vibraphone.play();
  }
  
  else if (key == "Q") {
    for (var i = 0; i < 20; i++) {
      var block = blocks[floor(random(blocks.length))];
      block.change();
    }
  }
  
  var block;
  // if (key == "Q" && row < 10) {
  //   block = blocks[row];
  //   var h = floor(random(48, 75));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "W") {
  //   print('lea' + row);
  //   block = blocks[row];
  //   var h = floor(random(70, 107));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "E") {
  //   block = blocks[row];
  //   var h = floor(random(102, 137));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "R") {
  //   block = blocks[row];
  //   var h = floor(random(133, 185));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "T") {
  //   block = blocks[row];
  //   var h = floor(random(183, 227));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "Y") {
  //   block = blocks[row];
  //   var h = floor(random(222, 259));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "U") {
  //   block = blocks[row];
  //   var h = floor(random(255, 287));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "I") {
  //   block = blocks[row];
  //   var h = floor(random(282, 311));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "O") {
  //   block = blocks[row];
  //   var h = floor(random(308, 334));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // } else if (key == "P") {
  //   block = blocks[row];
  //   var h = floor(random(330, 360));
  //   var s = floor(random(90, 100));
  //   var l = floor(random(55, 75));
  //   block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
  //   block.showColor();
  //   row = row + 1;
  // }
}

function assignColors(h, s, l, block) {
    block.c = color('hsl('+h+', '+s+'%, '+l+'%)');
}