let bubbles = [];

function setup() {
  // Create the canvas
  var cnv = createCanvas(windowWidth * .8, windowHeight * .8);
  // var cnv = createCanvas(500, 500)
  let density = windowWidth * windowHeight * .001
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200);
  for (let i = 0; i < density; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 20);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  //put settimeout into here
  console.log('clicked')
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);

  }

}


function draw() {
  background(153, 204, 102);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  // console.log((typeof frameCount))
  // text(frameCount, width / 2, height / 2);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.speed = .3;
    this.didClick = true;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);


    if (d < this.r * 2) {
      // console.log(this)
      this.speed = 5
      this.move()
    }
    console.log('finished click', frameCount)
    // setTimeout(this.unclicked(mouseX, mouseY), 1000)

  }

  unclicked(px, py) {
    let d = dist(px, py, this.x, this.y);


    if (d < this.r * 2) {
      // console.log(this)
      this.speed = .3
      this.move()
    }
    console.log('inside unclick')

  }
  // clicked(px, py) {
  //   let d = dist(px, py, this.x, this.y);
  //   if (this.didClick) {
  //     if (d < this.r * 2) {
  //       // console.log(this)
  //       this.r = this.r * 2

  //     }
  //   } else {
  //     if (d < this.r * 2) {
  //       this.r = this.r / 2

  //     }
  //   }
  //   this.didClick = !this.didClick
  // }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  show() {
    // stroke(255);
    // fill(this.brightness, 153, 204, 102);
    fill(255, 70);
    stroke(200);
    ellipse(this.x, this.y, this.r * 2);
  }
}
