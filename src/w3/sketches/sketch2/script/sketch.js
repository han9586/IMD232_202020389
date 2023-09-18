let pos;
let vel;
// 속도
let acc;
// 속력
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 1);
  console.log(pos);
  console.log(vel);
}

function draw() {
  background(255);
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);

  //   if (pos.x < 0) {
  //     vel.x *= -1;
  //   } else if ((pos.x, pos.y, 50)) {
  //     vel.x *= -1;
  //   }
  //   if (pos.x - radius < 0 || pos.x + radius > width) {
  //     vel.x *= -1;
  //   }
  //   if (pos.y - radius < 0 || pos.y + radius > width) {
  //     vel.y *= -1;
  //   }
  //   ellipse(pos.x, pos.y, 2 * radius);
  // }

  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}
