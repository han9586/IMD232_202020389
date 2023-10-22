class Particle {
  constructor(x, y, vx, vy) {
    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    // this.velocity = createVector(random(19, 20));
    this.acceleration = createVector(0, 0);
    this.radius = 10;
    this.lifespan = 60;
    this.mass = 10;
    this.color = color;
  }

  update() {
    this.velocity.add(gravity);
    this.position.add(this.velocity);
    this.alpha -= 0.1;
    this.acceleration.mult(0); // 가속도 초기화
    this.velocity.add(this.gravity); // 중력 적용
    this.lifespan -= 1;
  }

  display() {
    fill(255, 100, 100, (this.lifespan / 60) * 100); // 투명도 조절
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  isDead() {
    return this.lifespan < 0 || this.position.y > height;
  }
}
