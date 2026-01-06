import { createGrid } from "./level/grid.js";

export class Level1State {
  constructor() {
    this.container = null;
    this.character = null;
  }

  enter() {
    this.container = document.createElement('div');
    this.container.style.position = 'fixed';
    this.container.style.inset = '0';
    this.container.style.display = 'flex';
    this.container.style.flexDirection = 'column';
    this.container.style.zIndex = '9999';

    const display = document.createElement('div');
    Object.assign(display.style, {
      flex: 1,
      position: 'relative',
      backgroundColor: 'rgba(250,210,210)',
    });

    const display2 = document.createElement('div');
    Object.assign(display2.style, {
      height: '300px',
      backgroundColor: 'rgba(250,210,250)',
    });

    const gameX = 400;
    const gameY = 440;

    const gameDisplay = document.createElement('div');
    Object.assign(gameDisplay.style, {
      width: gameX + 'px',
      height: gameY + 'px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid black',
      backgroundColor: 'white'
    });

    // 🔳 GRID (10x10)
    const grid = createGrid(10, 10, gameX, gameY);
    gameDisplay.appendChild(grid);

    // 🧍 CHARACTER
    this.character = document.createElement('div');
    Object.assign(this.character.style, {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200,200,200)'
    });

    gameDisplay.appendChild(this.character);

    display.appendChild(gameDisplay);
    this.container.appendChild(display);
    this.container.appendChild(display2);
    document.body.appendChild(this.container);
  }

  exit() {
    if (this.container?.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
