class Vehicle {
  // Vehicle 클래스를 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y); // 위치를 2D 벡터로 설정
    this.vel = p5.Vector.random2D(); // 초기 속도를 무작위로 설정
    this.acc = createVector(); // 가속도를 2D 벡터로 초기화
    this.mass = mass; // 질량 설정
    this.rad = rad; // 반지름 설정
    this.speedMx = speedMx; // 최대 속도 설정
    this.forceMx = forceMx; // 최대 힘 설정
    this.neighborhooodRad = 50; // 반경 설정
    this.color = color; // 색상 설정
  }

  cohesion(others) {
    // 거리를 계산하고 그에 따른 조절된 힘을 반환
    let cnt = 0; // cnt 변수를 사용하여 개수를 추적 / 0으로 초기화
    const steer = createVector(0, 0); // steer라는 벡터를 생성
    others.forEach((each) => {
      // 각 요소(each)에 대해 반복
      if (each !== this) {
        // this 제외 / 아래의 코드를 실행
        const distSq = // distSq 변수에 저장
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; // 거리 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 계산된 거리의 제곱이 neighborhooodRad의 제곱보다 작은 경우 아래의 코드를 실행
          steer.add(each.pos); // steer 벡터에 현재 반복중인 다른 차량(each)의 위치(each.pos)를 추가
          cnt++; // cnt 변수를 증가 / 개수 추적
        }
      }
    });
    if (cnt > 0) {
      // 만약 cnt가 0보다 크다면 아래의 코드를 실행
      steer.div(cnt); // steer 벡터를 cnt로 나누기
      steer.sub(this.pos); // this.pos에서 평균 위치 빼기
      steer.setMag(this.speedMx); // steer 벡터의 크기를 최대 속도(speedMx)로 조절
      steer.sub(this.vel); // 현재 차량의 현재 속도(this.vel)를 steer 에서 빼기
      steer.limit(this.forceMx); // steer 벡터의 크기를 최대 힘(forceMx)으로 제한
    }
    return steer; // 최종적으로 계산된 steer 반환
  }

  align(others) {
    let cnt = 0; // cnt 변수를 선언하고 0으로 초기화 / 개수를 추적하는 데 사용
    const steer = createVector(0, 0); // steer라는 이름의 2D 벡터를 생성하고 초기값을 (0, 0)으로 설정
    others.forEach((each) => {
      // others 배열에 있는 각 요소(each)에 대해 반복
      if (each !== this) {
        // this을 제외 / 아래의 코드를 실행
        const distSq = // this과 each 사이의 거리를 계산
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // 계산된 거리의 제곱이 neighborhooodRad의 제곱보다 작은 경우 아래의 코드를 실행
          steer.add(each.vel); // steer 벡터에 현재 반복중인 each의 속도(each.vel)를 추가
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; // cnt 변수를 증가
        }
      }
    });
    if (cnt > 0) {
      // cnt 가 0보다 크다면, 아래의 코드를 실행
      steer.div(cnt); // steer를 cnt로 나누기
      steer.setMag(this.speedMx); // steer 벡터의 크기를 최대 속도(speedMx)로 조절
      steer.sub(this.vel); // 재 속도(this.vel)를 steer 벡터에서 빼기
      steer.limit(this.forceMx); // steer 벡터의 크기를 최대 힘(forceMx)으로 제한
    }
    return steer; // 최종적으로 계산된 steer 벡터를 반환
  }

  separate(others) {
    let cnt = 0; // cnt 변수를 선언하고 0으로 초기화
    const steer = createVector(0, 0); // steer라는 이름의 2D 벡터를 생성하고 초기값을 (0, 0)으로 설정
    others.forEach((each) => {
      // others 배열에 있는 각 요소(each)에 대해 반복
      if (each !== this) {
        // this 을 제외한 다른 차량들에 대해서만 아래의 코드를 실행
        const dist = this.pos.dist(each.pos); // this과 each 사이의 거리를 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리가 0보다 크고, (this.rad와 each.rad)을 합친 값보다 작은 경우 아래의 코드를 실행
          const distNormal = dist / (this.rad + each.rad); // distNormal 변수를 계산하여 거리를 조절 / 이 변수는 현재 차량과 다른 차량 사이의 거리를 반지름 합으로 나눈 값
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); // towardMeVec라는 이름의 벡터를 생성 / this 에서 each을 향하도록 설정
          towardMeVec.setMag(1 / distNormal); // towardMeVec 벡터의 크기를 distNormal 값의 역수로 설정
          steer.add(towardMeVec); // steer 벡터에 towardMeVec를 추가 / 충돌 피한 경우 추적
          cnt++; // cnt 변수를 증가
        }
      }
    });
    if (cnt > 0) {
      // 만약 성공적으로 충돌을 피한 경우(cnt가 0보다 크다면), 아래의 코드를 실행
      steer.div(cnt); // steer를 cnt로 나누기
      steer.setMag(this.speedMx); // steer를 최대 속도(speedMx)로 조절
      steer.sub(this.vel); // this.vel를 steer 벡터에서 빼기
      steer.limit(this.forceMx); // steer 벡터의 크기를 최대 힘(forceMx)으로 제한
    }
    return steer; // 최종적으로 계산된 steer 벡터를 반환
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass); // force를 질량인 mass로 나눠서 외부 힘을 질량에 대한 가속도로 변환
    this.acc.add(forceDivedByMass); // 변환된 가속도를 가속도(this.acc)에 더하기
  }

  update() {
    this.vel.add(this.acc); // this.vel에 가속도(this.acc)를 더하기
    this.vel.limit(this.speedMx); // 속도를 최대 속도(speedMx)로 제한
    this.pos.add(this.vel); // 위치(this.pos)에 현재 속도(this.vel)를 더하기
    this.acc.mult(0); // 가속도(this.acc)를 0으로 재설정
  }

  borderInfinite() {
    // 화면 경계를 넘어갈 때 반대편에서 나타나는 무한한 화면 효과를 구현
    if (this.pos.x < -infiniteOffset) {
      // x 좌표(this.pos.x)가 왼쪽 화면 경계를 벗어난 경우, 오른쪽 화면 경계 반대편으로 이동
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset; // x 좌표(this.pos.x)가 오른쪽 화면 경계를 벗어난 경우, 왼쪽 화면 경계 반대편으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset; // y 좌표(this.pos.y)가 위쪽 화면 경계를 벗어난 경우, 아래쪽 화면 경계 반대편으로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset; // y 좌표(this.pos.y)가 아래쪽 화면 경계를 벗어난 경우, 위쪽 화면 경계 반대편으로 이동
    }
  }

  display() {
    push(); // 그리기 설정을 저장
    translate(this.pos.x, this.pos.y); // 위치(this.pos)로 화면의 그리기 원점을 이동
    rotate(this.vel.heading()); // 속도 방향에 따라 회전
    noStroke(); // 윤곽선을 없애고, 색상만으로 그리도록 설정
    fill(this.color); // 색상을 설정 / this.color는 색상을 나타내기
    beginShape(); // 다각형을 그리기
    vertex(this.rad, 0); // 다각형 첫 번째 꼭짓점
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); // 두 번째 꼭짓점
    vertex(0, 0); // 세 번째 꼭짓점
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); // 반지름 this.rad를 기반으로하며, cos() 및 sin() 함수를 사용하여 극좌표를 직교좌표로 변환
    endShape(CLOSE); // 다각형 그리기 마무리
    pop(); // 이전으로 복원
  }
}
