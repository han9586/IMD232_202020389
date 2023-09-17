function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background('#E9E6DD');

  rectMode(CENTER);
  fill(255);
  colorMode(RGB);
  noStroke();

  fill('#CECBC0');
  rect(480, 600, 1000, 300);
  fill('#C2C2C2');
  rect(650, 190, 400, 300);
  fill('#FFFFFF');
  rect(650, 200, 400, 300);
  fill('#FFF9EB');
  ellipse(380, 380, 55, 55);
  fill('#E8EFFD');
  rect(650, 70, 400, 10);
  rect(650, 100, 400, 10);
  rect(650, 130, 400, 10);
  rect(650, 160, 400, 10);
  rect(650, 190, 400, 10);
  rect(650, 220, 400, 10);
  rect(650, 250, 400, 10);
  rect(650, 280, 400, 10);
  rect(650, 310, 400, 10);
  fill('#C1885F');
  rect(650, 400, 400, 40);
  rect(470, 500, 30, 150);
  rect(830, 500, 30, 150);
  rect(600, 550, 30, 120);
  rect(380, 515, 120, 120);
  rect(700, 550, 30, 120);
  rect(650, 500, 150, 40, 5);
  rect(180, 210, 200, 250);
  fill('#8B6346');
  rect(650, 420, 400, 10);
  rect(600, 525, 30, 10);
  rect(700, 525, 30, 10);
  rect(380, 490, 30, 10);
  rect(380, 530, 30, 10);
  fill('#A7734D');
  rect(180, 120, 180, 50);
  rect(180, 180, 180, 50);
  rect(180, 240, 180, 50);
  rect(180, 300, 180, 50);
  rect(380, 510, 100, 3);
  fill('#FFFFFF');
  ellipse(238, 185, 40, 40);
  fill('#C2C2C2');
  rect(650, 380, 200, 20);
  fill('#C3EAFF');
  ellipse(242, 190, 20, 20);
  fill('#B0B0B0');
  rect(650, 320, 180, 100);
  fill('#575757');
  rect(650, 320, 170, 90);
  fill('#6CBB50');
  rect(500, 280, 10, 40);
  rect(513, 280, 10, 40);
  rect(487, 280, 10, 40);
  rect(380, 420, 20, 70);
  rect(115, 302, 16, 45);
  rect(238, 170, 5, 40);
  ellipse(238, 140, 20, 20);
  ellipse(227, 160, 20, 20);
  fill('#FF7676');
  rect(133, 302, 16, 45);
  fill('#7E6B6B');
  rect(500, 340, 50, 90);
  fill('#FF9900');
  rect(650, 460, 170, 40, 100);
  arc(380, 380, 80, 80, 0, PI + QUARTER_PI, CHORD);
  rect(98, 302, 16, 45);
  fill('#FF7676');
  translate(500, 240);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 10, 20, 60);
    rotate(PI / 5);
  }
}
