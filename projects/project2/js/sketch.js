


class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
  }


  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
    {

    }
  }

  draw() {
    fill(175,238,238,68);


    ellipse(this.xOff + this.x, this.yOff + this.y, 60,33);

    fill(255);
    ellipse(250,185,100,125);
    ellipse(mouseX,mouseY,40,60);
    ellipse(650,185,100,125);
    ellipse(500,250,150,175);
    ellipse(1200,325,100,125);




  }
}

let unit = 80;
let count;
let mods = [];

function setup() {
  createCanvas(displayWidth, 640);

  noStroke();
  let wideCount = width / unit;
  let highCount = height / unit;
  count = wideCount * highCount;

  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 4,
        unit / 4,
        random(1.05, 1.8),
        unit
      );
    }
  }
}

function draw() {
  background(70,130,180);
  clear();



  for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();

  }
}
