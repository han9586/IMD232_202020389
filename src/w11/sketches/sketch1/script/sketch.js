let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.size(320, 480);
}

function draw() {
  background(white);
  image(cam, 0, 0, width, height);
}
