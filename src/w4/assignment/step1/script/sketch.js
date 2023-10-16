let bodies = [];

let G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < 30; i++) {
    // 모든 물체 쌍에 대한 상호작용 검사
    for (let j = 0; j < 30; j++) {
      if (i !== j) {
        // i와 j 가 같은 물체가 아닌 경우 확인
        let forceForJ = bodies[i].attract(bodies[j]); // 두 인력 계산 후 결과를 변수에 저장
        bodies[j].applyForce(forceForJ); // 물체 간의 인력을 시물레이션으로 적용
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      // 변수가 true 인 경우, 물체의 벡터를 화면에 표시
      bodies[i].displayVectors(); // 함수 호출
    }
  }
}

function mousePressed() {
  // 함수는 마우스 클릭 시 호출
  if (isMouseInsideCanvas()) {
    // 마우스 클릭이 캔버스 내부에서 발생한 경우에만
    reset(); // rect 함수 호출하여 물체를 초기화
  }
}

function reset() {
  // 초기화
  for (let i = 0; i < 30; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
} // for 사용하여 20개의 물체 생성하기 -> 성공
