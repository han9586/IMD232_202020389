let traffic; // 변수
let infiniteOffset = 80; // 변수

function setup() {
  // 초기 설정을 수행
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100); // 컬러 모드를 HSL
  background('white'); // 배경색 흰색
  traffic = new Traffic(); // 클래스의 새로운 객체를 만들어 traffic 변수에 할당
  for (let n = 0; n < 10; n++) {
    //  10번 반복
    traffic.addVehicle(random(width), random(height)); // 무작위 위치에 추가
  }
}

function draw() {
  // 프레임마다 실행
  background('white'); // 배경색 흰색
  traffic.run(); // Traffic 객체의 run 메서드를 호출
}

function mouseDragged() {
  // 마우스를 드래그할 때 호출
  traffic.addVehicle(mouseX, mouseY); // 마우스 위치 mouseX와 mouseY를 사용하여 추가
}
