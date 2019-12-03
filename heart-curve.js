
const heart = []
let m = 25;

let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)

}

function draw() {
  noStroke()
  translate(width / 2, height / 2)
  fill(119, 221, 119)


  beginShape()
  for (let i = -PI; i < PI; i += 0.01) {
    polarPos(i, m)
  }
  endShape()
}

function polarPos(t, size) {
  let sint = sin(t)
  let cost = cos(t)
  let r = (sint * sqrt(abs(cost))) / (sint + 1.8) - 2 * sint + 2;
  let x = size * r * cost;
  let y = -size * r * sint;
  return vertex(x, y)
}
