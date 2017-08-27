var rules = [0, 1, 1, 1, 0, 1, 1, 0];
var on;
var off = 255;
var cells = [];
var row = 0;
var columns;
var spacing = 5;
var stop = false;
var r = 0;
var g = 0;
var rot = 0;

function setup() {
  createCanvas(1100, 1100);
  background(0);
  on = color(255, 0, 169);
  columns = width/spacing;
  for (var i = 0; i < height; i+=spacing) {
    for (var j = 0; j < width; j+=spacing) {
      cells.push(new Cell(j,i, true));
    }
  }
  
  
  // seed randomly
  
  for (var i = 0; i < 10000; i++) {
    var r = floor(random(cells.length));
    cells[r].dead = false;
  }
}

function draw() {
  push();
  rotate(radians(rot));
  if (rot%360 == 0) {
    translate(0, 0);
  } else if (rot%270 == 0) {
    translate(-300, 0);
  } else if (rot%180 == 0) {
    translate(-300, -300);
  } else if (rot%90 == 0) {
    translate(0, -300);
  }

  background(0, 0, 0, 10);
  if (!stop) {
    for (var i = 0; i < columns; i++) {
      cell = cells[i + (row * columns)];
      stroke(0);
      fill(0, r+=0.1, 255);
      if (cell.alive(i)) {
        rect(cell.x, cell.y, spacing, spacing);
      }
    }
  }
  pop();
  
  if (row < columns-1) {
    row++;
  } else {
    stop = true;
    
    reset();
    r = 0;
  }
}

function reset() {
  print("resetting");
  for (var i = 0; i < cells.length; i++) {
    cells[i].dead = true;
  }
  
  for (var i = 0; i < 1000; i++) {
    var r = floor(random(cells.length));
    cells[r].dead = false;
  }
  
  row = 0;
  spacing = 5;
  // rot = rot + 90;
  r = 0;
  print(rot);
  stop = false;
}

function Cell(x, y, dead) {
  this.x = x;
  this.y =y;
  this.dead = dead;
}

Cell.prototype.alive = function(i) {
  
    var nei = []
    
    if (i > columns) {
      topLeft = cells[i-columns-1];
      topMe = cells[i-columns];
      topRight = cells[i-columns+1];
      nei.push(topLeft, topMe, topRight);
    }
    
    if (i > 0) {
      left = cells[i-1]
      me = cells[i]
      right = cells[i+1]
      nei.push(left, right, me);
    }
    
    bottomLeft = cells[i+columns-1];
    bottomMe = cells[i+columns];
    bottomRight = cells[i+columns+1];
    nei.push(bottomLeft, bottomMe, bottomRight)
    
    var undead = 0;
    
    for (var j = 0; j < nei.length; j++) {
      if (nei[j].dead == false) {
        undead++;
      }
    }
    
    if (undead == 2) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 == 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 3) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 != 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 4) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 == 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 5) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 != 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 6) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 == 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 7) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 != 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else if (undead == 8) {
      for (var k = 0; k < nei.length; k++) {
        if (k%2 == 0) {
          nei[k].dead = false;
          return true;
        } else {
          return false;
        }
      }
    } else {
      this.dead = false;
      return false;
    }
    
}
