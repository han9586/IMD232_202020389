const stripeNum = 8; // 행의 수 8개 설정하고
const stripeNum2 = 8; // 각 행의 원의 수 8개 설정함
const stripeBegin = 15;
const stripeGap = 30;

let gridC;
let gridR;
let angleBegin = 0;

let angleStep;
let marginRatio = 0.5;
let colors = [];
function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleMode(DEGREES);
  colorMode(HSL, 360, 100, 100, 100);
  background(255);

  let totalSpacing = width / (2 * stripeNum2 + 1);
  let spacing = 2 * totalSpacing;

  // 원의 반지름을 계산
  let radius = spacing / 2;

  // // 원의 반지름을 2배로 크게 설정
  // radius *= 1.5; // 이 값을 조정하여 원의 크기를 변경

  gridC = radius * marginRatio;
  gridR = height / stripeNum;
  angleStep = 360 / stripeNum2; // 각도 변화

  // 색상 배열에 원하는 색상 그룹 추가
  colors.push([color('red'), color('yellow')]); // 빨강과 노랑
  colors.push([color('green'), color('blue')]); // 초록과 파랑
}
function draw() {
  background(255);

  for (let a = 0; a < stripeNum; a++) {
    let colorGroup = colors[a % 2]; // 빨강과 노랑, 그 다음에 초록과 파랑 색상 그룹을 반복 선택
    for (let b = 0; b < stripeNum2; b++) {
      push();
      translate((b + 1) * (gridC * 2 + gridC), a * gridR + gridR / 2);
      rotate(angleBegin + b * angleStep);

      let fixedColor = colorGroup[b % colorGroup.length];

      stroke(fixedColor);
      strokeWeight(1);
      noFill();

      // 원
      ellipse(0, 0, gridC, gridC);

      // 반지름을 나타내는 선
      line(0, 0, gridC / 2, 0);

      // 검정색 작은 원 (반지름 선 끝)
      noStroke();
      fill(0);
      ellipse(gridC / 2, 0, 6, 6);

      pop();
    }
  }
  angleBegin += 1; // 매 프레임마다 시작 각도 1도씩 증가
}
