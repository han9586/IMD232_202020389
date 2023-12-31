class Vehicle {
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  seek(target) {
    // target.sub(this.pos);
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.speedMx);
    let steering = p5.Vector.sub(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      stroke(127);
      line(0, 0, desired.x, desired.y);
      stroke(0, 0, 255);
      line(0, 0, steering.x, steering.y);
      pop();
    }
    steering.limit(this.forceMx);
    this.applyForce(steering);
  }

  applyForce(force) {
    // force.div(this.mass);
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    let angle = this.vel.heading();

    push();
    translate(this.pos.x, this.pos.y);

    rotate(angle);

    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    pop();
  }
}
