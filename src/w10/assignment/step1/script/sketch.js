const rows = 100;
const cols = 100;
const cellSize = 15;

const rpStates = [0, 1, 2];
const rpColors = {
  0: [150, 0, 0], // rock
  1: [0, 150, 0], // paper
  2: [0, 0, 150], // scissors
};

let grid = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  initializeGrid();
}

function draw() {
  background(255);

  updateGrid();
  displayGrid();
}

function initializeGrid() {
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = floor(random(3));
    }
  }
}

function updateGrid() {
  const newGrid = createEmptyGrid();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const currentState = grid[i][j];
      const neighbors = getNeighbors(i, j);

      const winningNeighbors = getWinningNeighbors(currentState, neighbors);
      const winningCount = winningNeighbors.length;

      newGrid[i][j] =
        winningCount <= 2
          ? currentState
          : winningNeighbors[floor(random(winningCount))];
    }
  }

  grid = newGrid;
}

function displayGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const state = grid[i][j];
      const color = rpColors[state];

      fill(color);
      rect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
}

function createEmptyGrid() {
  const newGrid = [];
  for (let i = 0; i < rows; i++) {
    newGrid[i] = new Array(cols).fill(null);
  }
  return newGrid;
}

function getNeighbors(row, col) {
  const neighbors = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        neighbors.push(grid[newRow][newCol]);
      }
    }
  }
  return neighbors;
}

function getWinningNeighbors(currentState, neighbors) {
  const winningMoves = {
    0: 2, // 가위
    1: 0, // 바위
    2: 1, // 보
  };

  return neighbors.filter(
    (neighbor) => neighbor === winningMoves[currentState]
  );
}
