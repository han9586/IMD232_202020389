class Emitter {
  constructor(x, y, numParticles) {
    this.x = x;
    this.y = y;
    this.numParticles = numParticles;
    this.particles = [];
    this.lifeSpan = 600;

    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(createVector(0, 0.01)); // 중력 적용
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }

    this.lifeSpan -= 100;
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
