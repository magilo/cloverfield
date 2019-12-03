let angle = 0.0;
let jitter = 0.0;

function setup() {
  // Create the canvas
  // var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  var cnv = createCanvas(windowWidth, windowHeight)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200); //bg color
  // noStroke();



}


function draw() {
  push()
  translate(width / 2, height / 2)

  rotate(radians(frameCount));
  fill(0)
  makeHeart()
  pop()
}
function makeHeart() {
  beginShape()
  bezier(408, 240, 327, 185, 260, 306, 408, 380);
  bezier(408, 240, 510, 185, 530, 330, 408, 380);
  endShape()

}
