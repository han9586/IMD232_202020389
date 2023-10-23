let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(0, 0);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  emitter.addParticle();
  emitter.update();
  emitter.display();
}
