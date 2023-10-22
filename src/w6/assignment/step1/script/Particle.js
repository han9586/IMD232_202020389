class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 600;
    this.life = this.lifeSpan;
    this.angleSpeed = random(-0.3, 0.3); // 수정: 각도 범위 조정
    this.angle = 0;
  }

  applyForce(gravity) {
    this.acc.add(gravity); // 힘을 누적
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1; // 수정: 더 빠르게 lifeSpan 감소
    this.angle += this.angleSpeed; // 각도를 갱신
  }

  display() {
    noStroke();
    fill(127, 255);
    push(); // 현재 그래픽 상태를 저장
    translate(this.pos.x, this.pos.y); // 입자의 위치로 이동
    rotate(this.angle); // 현재 각도로 회전
    rectMode(CENTER);
    square(0, 0, this.rad * 2); // 중심을 중심으로 사각형 그리기
    pop(); // 이전 그래픽 상태로 복원
  }

  isDead() {
    return this.life < 0;
  }
}
