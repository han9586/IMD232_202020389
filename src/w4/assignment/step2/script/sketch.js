let moverA;
let gravity;
let isDragging = false; // 드래그 여부 변수
let offsetX, offsetY;
let pmVec; // 이전 프레임의 마우스 위치 벡터

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 50); // 객체 생성하고 초기 위치와 질량 설정
  gravity = createVector(0, 0.1); // 변수에 중력 벡터를 생성하여 y 방향으로 아래로 향하도록!
  pmVec = createVector(mouseX, mouseY);
}

function draw() {
  background(255);

  let mVec = createVector(mouseX, mouseY);

  if (isDragging) {
    // 마우스 위치에 따라 Mover 객체 x축 방향으로 이동
    moverA.pos.x = mouseX - offsetX;
    moverA.pos.y = mouseY - offsetY;
  } else {
    // 드래그 중이 아니라면 힘을 적용하고 업데이트
    let gravityA = createVector(gravity.x, gravity.y);
    gravityA.mult(moverA.mass);
    moverA.applyForce(gravityA);
    // moverA.applyForce(wind);

    // 이전 프레임의 마우스 위치에서 현재 프레임 마우스 위치로 향하는 벡터...
    let force = p5.Vector.sub(mVec, pmVec);

    force.mult(0.001); // 조절 가능
    moverA.applyForce(force);

    pmVec.set(mVec);

    moverA.update();
    // 왜 자꾸 바운스가 생기고 떨어지는지 모르겠다...
    if (moverA.pos.y + moverA.radius >= height) {
      moverA.pos.y = height - moverA.radius;
      moverA.vel.y *= -0.9; // 바운스 대신 속도를 조절
    }
  }

  moverA.display();
}

function mousePressed() {
  // 마우스 버튼을 누를 때 Mover 객체를 드래그 모드로 설정
  let d = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
  if (d < moverA.radius) {
    isDragging = true;
    offsetX = mouseX - moverA.pos.x;
    offsetY = mouseY - moverA.pos.y;
  }
}

function mouseDragged() {
  // 마우스 드래그 중일 때 Mover 객체를 마우스 위치로 이동
  if (isDragging) {
    moverA.pos.x = mouseX - offsetX;
    moverA.pos.y = mouseY - offsetY;
  }
}

function mouseReleased() {
  // 마우스 버튼을 놓을 때 Mover 객체를 던지기
  isDragging = false;
}
