import EventBus from "./event.js";

export class MainMenuState {
  constructor() {
    this.container = null;
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
      backgroundColor: 'rgba(210,210,250)',
      border: '2px solid black'
    });

    const display2 = document.createElement('div');
    Object.assign(display2.style, {
      height: '300px',
      backgroundColor: 'rgba(210,250,210)',
    });

    const level1Btn = document.createElement('button');
    level1Btn.textContent = 'LVL 1!';
    level1Btn.style.position = 'absolute';
    level1Btn.style.top = '50%';
    level1Btn.style.left = '50%';
    level1Btn.style.transform = 'translate(-50%, -50%)';
    level1Btn.style.cursor = 'pointer';

    level1Btn.addEventListener('click', () => {
      EventBus.emit("startLevel1");
      this.exit();
    });

    display.appendChild(level1Btn);
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
