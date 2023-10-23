let traffic;
// let vehicle;
// let mVec;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  // vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  // mVec = createVector();
  traffic = new Traffic();

  for (let n = 0; n < 20; n++) {
    traffic.addVehicle(random(width), random(height));
  } // 처음 시작할 때 20개 정도 나와있음

  // colorMode(RGB, 255, 255, 255);
  background(0, 100, 100);
}

function draw() {
  background(0, 100, 100);
  traffic.run();
  // mVec.set(mouseX, mouseY);
  // vehicle.seek(mVec);
  // vehicle.update();
  // vehicle.display();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
