class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.gravity = gravity; // 중력 적용
    this.position = createVector(x, y);
  }

  emit(x, y, numParticles) {
    for (let i = 0; i < numParticles; i++) {
      for (let j = 0; j < 360; j += 10) {
        let angle = radians(j); // 각도를 라디안으로 변환
        let vx = cos(angle) * 5; // 원 주위로 움직이는 속도
        let vy = sin(angle) * 5;
        let color = [random(255), random(255), random(255)]; // 랜덤한 고정 색상 생성
        let p = new Particle(x, y, vx, vy);
        this.particles.push(p);
      }
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let p of this.particles) {
      p.display();
    }
  }
}
