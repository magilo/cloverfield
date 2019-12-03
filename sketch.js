let boids = [];

function setup() {
  // Create the canvas
  var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  // var cnv = createCanvas(500, 500)
  let density = windowWidth * windowHeight * .003
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200);

  // Add an initial set of boids into the system
  for (let i = 0; i < density; i++) {
    boids[i] = new Boid(random(width), random(height));
  }
}
function draw() {
  background(51);
  // Run all the boids
  for (let i = 0; i < boids.length; i++) {
    boids[i].render(boids);
    boids[i].move();
    // boids[i].display();
  }
}


// Boid class
// Methods for Separation, Cohesion, Alignment added
class Boid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.acceleration = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.position = createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 3;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
    this.diameter = random(10, 30); //jitter
    this.speed = 1; //jitter
  }


  // Draw boid as a circle
  render() {
    fill(127, 127);
    stroke(200);
    ellipse(this.position.x, this.position.y, 16, 16);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  // display() {
  //   ellipse(this.x, this.y, this.diameter, this.diameter);
  // }

}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

