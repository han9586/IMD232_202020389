let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoseMyP5Sketch');
  htmlDom = document.querySelector('#hereGoseMyP5Sketch');
  console.log('p5 select', dom);
  console.log('querySelector', htmlDom);
  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다');
  dom = select('#hereGoseMyP5Sketch');
  console.log(dom);
}
