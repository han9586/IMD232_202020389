let emiiter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createVector(0, 0.1);
  noStroke();
  background(255);
  for (let n = 0; n < 100; n++) emitter.emit(width / 2, height / 2, 1);
}

function draw() {
  background(255);

  emitter.update();
  emitter.display();

  console.log('현재 파티클의 갯수: ' + emitter.particles.length);
}

function mousePressed() {
  emitter.emit(mouseX, mouseY, 1);
}
