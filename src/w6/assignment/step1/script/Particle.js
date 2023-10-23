class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 2);
    this.length = 12;
    this.angle = 0;
    this.color = color(random(360), 100, 100, 100);
  }

  update() {
    this.pos.add(this.vel);
    this.angle += random((TAU / 360) * 1, (TAU / 360) * 5);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    // noStroke();
    fill(this.color);
    rect(0, 0, this.length, this.length);
    pop();
  }
}
