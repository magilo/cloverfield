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

  // Set colors
  // fill(204, 101, 192, 127);
  // stroke(127, 63, 120);

  let numVertices = 3;
  let spacing = 360 / numVertices;

  beginShape();

  for (let i = 0; i < numVertices + 1; i++) {


    let angle = i * spacing;
    let x = (cos(radians(angle)) * 10) + 200;
    let y = (sin(radians(angle)) * 10) + 200;
    console.log('x: ', x, 'y: ', y)
    // makePoint(x, y);
    if (i === 0) {
      vertex(x, y);
    }
    else {

      let cAngle = angle - spacing / 2;
      let cX = (cos(radians(cAngle)) * 90) + 200;
      let cY = (sin(radians(cAngle)) * 90) + 200;
      console.log(cX, cY, x, y)
      quadraticVertex(cX, cY, x, y)
    }
  }
  endShape();



}

function draw() {
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}
