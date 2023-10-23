let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // colorMode(HSL, 360, 100, 100, 100);

  emitter = new Emitter(0, 0);
  rectMode(CENTER);
  background(255);
}

function draw() {
  emitter.addParticle();
  emitter.update();

  background(255);
  emitter.display();
}
