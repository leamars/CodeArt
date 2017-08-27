var spacer = 5;
var stop = false; 
function setup() {
  createCanvas(300, 300);
  background(255);

}

function draw() {
  // VERTICAL
  // for (var i = spacer/2; i < height; i += spacer) {
  //   line(i, 0, i, height);
  // }
  
  // HORIZONTAL
  // for (var i = spacer/2; i < height; i += spacer) {
  //   line(0, i, width, i);
  // }
  
  //DIAGONAL LEFT
  // for (var i = spacer/2; i < height; i += spacer) {
  //   line(i, 0, 0, i);
  //   // line(i, height, 0, i);
  //   line(i, height, height, i);
  // }
  
  // DIAGONAL RIGHT
  // for (var i = spacer/2; i < height; i += spacer) {
  //   // line(width-i, 0, 0, i);
  //   // line(0, i, width-i, height-i);
  //   // line(0, i, width-i, 0)
  //   line(0, i, width-i, height)
  //   //line(i, 0, width-i, height)
  //   //line(i, 0, width-i, height-i)
  //   line(i, 0, width, height-i)
  // }

  if (!stop) {
    for (var i = 0; i < height; i += 20) {
      for (var j = 0; j < width; j += 20) {
        print("I: " + i + "J :" + j);
        var block = new Block(20, 20);
        var rand = floor(random(2));
        var randC = floor(random(4));
        block.show(i, j, rand, randC);
      }
    }
  }
  stop = true;
}

function Block(wid, hei) {
  this.width = wid;
  this.height = hei;
}

Block.prototype.show = function(posX, posY, rand, c) {
  noStroke();
  // fill(100 * c, 50 * c * rand, 50 * rand);
  fill(0, 100, 75 * rand);
  rect(posX, posY, this.width, this.height);
  stroke(255);
  for (var i = posX; i < this.height + posX; i += 5) {
    if (rand == 0) {
    // VERTICAL
      line(i, posY, i, this.height + posY)
    }
    
    else if (rand == 1) {
    // HORIZONTAL
      line(posX, posY + (i - posX), this.width + posX, posY + (i - posX))
    }
    
    else if (rand == 2) {
    // DIAGONAL
      line(posX, posY + this.height - (i - posX), posX + this.width - (i - posX), posY);
      line(i, posY + this.height, posX + this.width, posY + (i - posX));
    }
    
    else if (rand == 3) {
      print("X1: " + (posX + (i - posX)) + " Y1: " + posY + " X2: " + (this.height + posX) + " Y2: " + (this.width + posY - (i - posY)));
    // DIAGONAL 2
      line(posX, posY + (i - posX), this.width + posX - (i - posX), this.height + posY)
      line(posX + (i - posX), posY, this.height + posX, this.width + posY - (i - posX));
    }
  }
}


