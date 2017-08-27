var x = 0
var xOff = 0
var yOff = 0

function setup() {
  
  createCanvas(200, 200)

}

function draw() {

  if (x < 5) {
    for (var y = 0; y < 10; y++) {
      var bright = map(noise(xOff, yOff), 0, 1, 0, 255);
      print(bright)
      fill(bright)
      rect(x, y, 1, 1)
      yOff += 0.01
    }
    xOff += 0.01
  }
  x++
}