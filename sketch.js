function setup() {
  createCanvas(400, 400);
}

let xPos = 0;
let yPos = 100;
function draw() {
  background(220);
  xPos += 1;
  circle(xPos,yPos,5);
}