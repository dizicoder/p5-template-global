function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  ellipse(width / 2, height / 2, 300, 300);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
