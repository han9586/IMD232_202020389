const stripeNum = 8;
const stripeNum2 = 8;
const gridC = 8; // 열의 수
const gridR = 8; // 행의 수
const stripeBegin = 80;
const stripeGap = 40;

let angleBegin = 0;
let angleBeginVel = 0.0001; // 각도 변화 속도 (15도씩 증가)
let angleStep = PI / 15; // 선을 그릴 때 한 번에 증가할 각도 (15도)

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
}

function draw() {
  background(255);

  rectMode(CENTER);

  let marginX = stripeBegin;
  let marginY = stripeBegin;
  let gapX = (width - 2 * marginX) / (gridC - 1);
  let gapY = (height - 2 * marginY) / (gridR - 1);

  for (let b = 0; b < gridR; b++) {
    for (let a = 0; a < gridC; a++) {
      push(); // 현재의 그림 상태 저장
      translate(marginX + a * gapX, marginY + b * gapY); // 중심으로 이동
      rotate(angleBegin); // 각도 조절
      strokeWeight(1.5);
      stroke(a * (360 / gridC), b * (100 / gridR), 100);
      ellipse(0, 0, 80);

      let lineLength = 40;
      let endX = cos(angleBegin) * lineLength;
      let endY = sin(angleBegin) * lineLength;

      line(0, 0, endX, endY);

      fill('black');
      noStroke();
      ellipse(endX, endY, 15);

      pop(); // 그림 상태 복원

      angleBegin += angleBeginVel;
    }
  }
}
