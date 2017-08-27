var img;
var drawOnce = 0;

function preload() {
  img = loadImage("lights.jpg");
}

function setup() {
  createCanvas(img.width, img.height);

}

function draw() {
  
  if (drawOnce == 0) {
    for (var i = 0; i*5 < img.width; i++) {
      noStroke();
      for (var j = 0; j*5 < img.height; j++) {
        var c = img.get(i*5, j*5);
        fill(c);
        rect(i*5, j*5, 5, 5);
      }
    }
  }
  
  drawOnce++;
}