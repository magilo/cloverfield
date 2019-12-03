let p0
let p1
const heart = []
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)

  // polarPos(p0, t, m)
  // while (t < tmax) {
  //   polarPos(p1, t, m);
  //   line(p0.x, p0.y, p1.x, p2.y)
  //   p0.set(p1)
  //   t += tdif
  // }
}

function draw() {
  // let t;
  // let tmin = -PI;
  // let tmax = PI
  // let tdif = 0.01
  // t = tmin

  translate(width / 2, height / 2)
  stroke(10)
  strokeWeight(2)


  beginShape()
  for (let i = -PI; i < PI; i += 0.01) {
    // polarPos(i, m)
    let sint = sin(i)
    let cost = cos(i)
    let r = (sint * sqrt(abs(cost))) / (sint + 1.4) - 2 * sint + 2;
    let x = size * r * cost;
    let y = -size * r * sint;
    vertex(x, y)
  }
  endShape()
}

function polarPos(t, size) {
  let sint = sin(t)
  let cost = cos(t)
  let r = (sint * sqrt(abs(cost))) / (sint + 1.4) - 2 * sint + 2;
  let x = size * r * cost;
  let y = -size * r * sint;
  vertex(x, y)
}
