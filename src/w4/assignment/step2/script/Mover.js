class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y); //
    this.vel = createVector(0, 0); // 물체의 현재 속도
    this.acc = createVector(0, 0); // 물체의 현재 위치
    this.accDisplay = createVector(0, 0); // 가속도를 시각으로. 초기값은 0
    this.mass = mass; // 물체의 질량
    this.radius = this.mass ** 0.5 * 10; // 물체의 반지름을 계산하고 설정. 반지름은 질량의 제곱근에 비례하여 10을 곱한 값
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass); // force를 물체의 질량으로 나눈 힘
    this.acc.add(forceDividedByMass); // acc (가속도)에 추가
  }

  update() {
    this.vel.add(this.acc); // 현재 속도에 현재 가속도를 더하여 새로운 속도를 계산
    this.pos.add(this.vel); //
    this.accDisplay.set(this.acc); // 그 속도를 사용하여 물체의 위치를 업데이트
    this.acc.mult(0); // acc (가속도)를 0 벡터로 재설정하여 다음 프레임에서의 가속도를 준비
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      // 만약 물체의 y 위치가 화면 아래 경계와 물체의 반지름 간격 이하로 내려갔다면?
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9; // 객체가 경계에 닿았을 때 반발력을 나타내는 상수 / 반대 방향으로 힘을 가할 것
    if (this.pos.x < 0 + this.radius) {
      // 0 + this.radius 는 왼쪽 경계. 객체의 x 좌표가 화면 왼쪽 경계보다 작으면
      this.pos.x -= 0 + this.radius; // 객체가 화면 왼쪽 경계에서 닿았을 때, 값을 왼쪽 경계까지 이동 시킴
      this.pos.x *= -1; // 값을 반대 방향으로 뒤집어 객체가 경계에서 반사되도록 함
      this.pos.x += 0 + this.radius; // 객체가 화면 왼쪽 경계에서 반사된 후, this.pos.x 값을 다시 보정하여 경계 넘어가지 않도록 함
      this.vel.x *= bounce; // 객체의 x 속도(vel.x)를 반발력(bounce)을 곱하여 반대 방향으로 바꿈 / 반발력에 의해 경계에서 튕겨나감
    } else if (this.pos.x > width - 1 - this.radius) {
      // 객체의 x 좌표가 화면 오른쪽 경계보다 크면 실행
      this.pos.x -= width - 1 - this.radius; // 오른쪽 경계에 닿았다고 판단 / 오른쪽 경계로 이동
      this.pos.x *= -1; // 반대 방향으로 뒤집기
      this.pos.x += width - 1 - this.radius; // 객체가 화면 오른쪽 경계에서 반사된 후, this.pos.x 값을 다시 보정하여 경계를 넘어가지 않도록 함
      this.vel.x *= bounce; //이 속도에 반발력(bounce)을 곱하여 반대 방향으로 바꿈 / 객체는 반발력에 의해 경계에서 튕겨나감
    }
    if (this.pos.y > height - 1 - this.radius) {
      // 이제 아래쪽 경계
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  display() {
    // 시각적으로 그리는 역할
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius); // 원을 그림
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('lime');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
