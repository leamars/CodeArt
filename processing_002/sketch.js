var font = "Georgia";
var fontSize = 36;
var fontSizeBig = 4 * fontSize;
var theta = 0;
var typed = [];
var output = "";
var x = 0;
var y = 0;

var r = 184;
var g = 0;
var b = 60;

var colors = [r, g, b];
function setup() {
  createCanvas(500, 250);
  background(255);
}

function draw() {
  fill(r, g, b, 10);
  textFont(font);
  textSize(fontSize);
  text(output, x, y);
}

function keyPressed() {
  print(key);
  if (key == "\r") {
    print("just pressed enter");
    g = 0;
  }
  else if (key == "\b") {
    typed.pop();
    output = typed.join("");
  }
  else if (key == "\u0014") {
    print("increase");
    g = g + 5;
    fontSize += 2;
  }
  else if (key == "\u0010") {
    print("decrease");
    g = g - 5;
    fontSize -= 2;
  }
  else {
    g = g + 5;
    typed.push(key);
    output = typed.join("");
  }
  fill(g, r, b, 10);
}

function mousePressed() {
  print("Location X: " + mouseX + " Location Y: " + mouseY);
  typed = [];
  output = "";
  g = 0;
  x = mouseX;
  y = mouseY;
}