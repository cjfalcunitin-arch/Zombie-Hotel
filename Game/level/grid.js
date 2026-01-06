export function createGrid(rows = 10, cols = 10, width, height) {
  const grid = document.createElement('div');

  Object.assign(grid.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: width + 'px',
    height: height + 'px',
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    pointerEvents: 'none', // does not block clicks
  });

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    Object.assign(cell.style, {
      border: '1px solid rgba(0,0,0,0.15)',
      backgroundColor: 'rgba(100, 100, 255, 0.08)' // semi-translucent
    });
    grid.appendChild(cell);
  }

  return grid;
}
