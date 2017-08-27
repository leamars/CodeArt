var grid = [];

function setup() {
	createCanvas(300, 300);
	background(255);

	for (var i = 10; i < width; i += 10) {
		for (var j = 10; j < height; j += 10) {
		  var pt = new Point(i, j, 1);
      grid.push(pt);
		}
	}
	
	print(grid);
}

function draw() {
  makeGrid();
  startPacman();
}

function makeGrid() {
  fill(0);
	for (var i = 1; i < grid.length; i++) {
    var pt = grid[i];
    ellipseMode(CENTER);
    ellipse(pt.x, pt.y, pt.rad, pt.rad);
  }
}

function Pacman() {
  
}

function startPacman() {
  noStroke();
  fill(255, 255, 0);
  ellipseMode(CENTER);
  var pt = grid[0];
  ellipse(pt.x, pt.x, 10, 10);
}

function Point(x, y, rad) {
	this.x = x;
	this.y = y;
	this.rad = rad;
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    
  } else if (keyCode == UP_ARROW) {
    
  } else if (keyCode == RIGHT_ARROW) {
    
  } else if (keyCode == LEFT_ARROW) {
    
  }
}