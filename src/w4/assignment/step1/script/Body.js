// Original Code from: https://editor.p5js.org/natureofcode/sketches/uT9VpVvCO
// Daniel Shiffman
// The Nature of Code
// Example 2-9: N-Bodies Attraction

//Modified by OO-SUNG SON (spctrm404)

class Body {
  constructor(x, y) {
    this.position = createVector(x, y); // 물체의 현재 위치
    this.velocity = createVector(0, 0); // 물체의 현재 속도
    this.acceleration = createVector(0, 0); // 물체의 가속도
    this.mass = random(16, 100); // 물체의 질량 16에서 100 사이의 임의의 질량값 설정
    this.radius = map(sqrt(this.mass), sqrt(16), sqrt(100), 20, 50); // 반지름은 질량의 제곱근에 비례해 20에서 50사의의 값을 갖도록 함
    this.velocityVisualization = createVector(0, 0); // 이거랑
    this.accelerationVisualization = createVector(0, 0); // 아건 물체의 속도와 가속도를 시각화하기 위해 사용
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position); // 현재 물체 위치와 body 의 위치 사이의 벡터 구하기
    let distance = constrain(force.mag(), 5, 25); // 중력 벡터의 크기를 최소 5에서 최대 25 사이로 제한
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    // strength 값을 감소시켜 물체 간의 중력 효과를 줄이기
    strength *= 0.01; // 감소 비율
    force.setMag(strength); // 벡터의 크기를 strength 로 설정
    return force; // 계산된 중력 벡터를 반환
  }

  applyForce(force) {
    // 메서드는 외부의 힘을 물체에 적용
    let forceDividedByMass = p5.Vector.div(force, this.mass); // 벡터를 물체의 질량으로 나눈 벡터를 구함
    this.acceleration.add(forceDividedByMass); // 계산된 힘을 물체의 가속도에 더함
  }

  update() {
    // 물체의 위치와 속도 업데이트. 속도 및 가속도를 시각화 벡터에 반영
    this.velocity.add(this.acceleration); // 현재 속도에 가속도를 더하여 새로운 속도를 계산
    this.position.add(this.velocity); // 새로운 속도를 사용하여 물체의 위치를 업데이트

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(100); // 현재 속도와 가속도를 시각화하기 위한 벡터를 업데이트

    this.acceleration.set(0, 0); // 가속도를 0으로 재설정
  }

  display() {
    noStroke();
    fill(0, 127); // 약간 회색으로
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}
