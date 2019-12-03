function makePoint(x, y) {
  stroke('purple'); // Change the color
  strokeWeight(10); // Make the points 10 pixels in size
  point(x, y);
}
function setup() {
  // Create the canvas
  // var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  var cnv = createCanvas(500, 500)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200); //bg color
  // noStroke();



}


function draw() {
  fill(0)
  translate(width / 2, height / 2)

  beginShape()
  for (let i = 0; i < TWO_PI; i += 0.01) {
    let r = 10;
    let x = r * 16 * pow(sin(i), 3);
    let y = -r * (13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i));
    vertex(x, y)
  }
  endShape()
}
