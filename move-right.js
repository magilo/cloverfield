let clovers = []; //array of clover objects

function setup() {
  // Create the canvas
  var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  // var cnv = createCanvas(500, 500)
  let density = windowWidth * windowHeight * .003
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(51);

  for (let i = 0; i < 100; i++) {
    clovers.push(new Clover());
  }
}

function draw() {
  for (let i = 0; i < clovers.length; i++) {
    clovers[i].display()
    clovers[i].move()
  }

}

class Clover {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);
  }

  move() {
    this.x += 1
  }

  display() {
    fill(127, 127);
    stroke(200);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
