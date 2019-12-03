
let bugs = []; // array of Jitter objects

function setup() {
  // Create the canvas
  var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  // var cnv = createCanvas(500, 500)
  let density = windowWidth * windowHeight * .003
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200);

  // Create objects
  for (let i = 0; i < density; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(51);
  for (let i = 0; i < bugs.length; i++) {
    // bugs[i].move();
    bugs[i].display();
  }

}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);
    this.speed = 5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  moveTranslate() {
    translate(this.x)
  }

  display() {
    fill(127, 127);
    stroke(200);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
