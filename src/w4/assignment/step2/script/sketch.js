let moverA;
let gravity;
let isDragging = false; //  드래그 여부 변수
let dragOffset;
let mVec;
let pMVec; // 이전 프레임의 마우스 위치 벡터
let lastMousePos;
let mouseSpeed;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 15);
  gravity = createVector(0, 0.3); // 변수에 중력 벡터를 생성하여 y 방향으로 아래로 향하도록!
  dragOffset = createVector(0, 0);
  mVec = createVector(mouseX, mouseY);
  pMVec = createVector(mouseX, mouseY);
  lastMousePos = createVector(mouseX, mouseY);
  mouseSpeed = createVector();
}

function draw() {
  background(255);

  mVec.set(mouseX, mouseY);

  if (isDragging) {
    // 마우스 드래그 중일 때, 마우스의 방향을 사용하여 물체의 속도 조절
    let mouseDirection = p5.Vector.sub(mVec, pMVec);
    mouseDirection.mult(0.04); // 조절할 속도 스케일 조절
    moverA.vel.add(mouseDirection);

    moverA.pos.set(mouseX - dragOffset.x, mouseY - dragOffset.y);
    moverA.acc.set(0, 0);
  } else {
    let frictionCoefficient = 0.08; // 마찰 계수
    let friction = p5.Vector.mult(moverA.vel, -1)
      .normalize()
      .mult(frictionCoefficient);
    moverA.applyForce(friction);

    let gravityA = createVector(gravity.x, gravity.y);
    gravityA.mult(moverA.mass);
    moverA.applyForce(gravityA);

    moverA.update();
    moverA.checkEdges();
  }

  moverA.display();

  pMVec.set(mVec.x, mVec.y);
}

function mousePressed() {
  // 마우스 버튼을 누를 때 Mover 객체를 드래그 모드로 설정
  let d = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
  if (d < moverA.radius) {
    isDragging = true;
    dragOffset.set(mouseX - moverA.pos.x, mouseY - moverA.pos.y);
    moverA.vel.set(0, 0);
    moverA.acc.set(0, 0);
  }
}

function mouseReleased() {
  isDragging = false;
}
