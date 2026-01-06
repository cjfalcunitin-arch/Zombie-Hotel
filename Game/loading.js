import EventBus from "./event.js";

export class LoadingState {
  constructor() {
    this.container = null;
    this.progress = 0;
    this.interval = null;
  }

  enter() {
    this.container = document.createElement('div');
    this.container.style.position = 'fixed';
    this.container.style.top = '0';
    this.container.style.left = '0';
    this.container.style.width = '100vw';
    this.container.style.height = '100vh';
    this.container.style.display = 'flex';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';
    this.container.style.fontSize = '38px';
    this.container.style.backgroundColor = 'black';
    this.container.style.color = 'white';
    this.container.style.zIndex = '9999';
    this.container.style.transition = 'opacity 0.5s';

    document.body.appendChild(this.container);

    this.progress = 0;
    this.updateDisplay();

    this.interval = setInterval(() => {
      this.progress++;
      this.updateDisplay();

      if (this.progress >= 100) {
        clearInterval(this.interval);
        this.container.style.opacity = '0';

        setTimeout(() => {
          this.exit();
        }, 500);
      }
    }, 20);
  }

  updateDisplay() {
    if (this.container) {
      this.container.textContent = `${this.progress}%`;
    }
  }

  exit() {
    if (this.container?.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }

    console.log("Loading complete!");

    // 🔔 SIGNAL MAIN.JS
    EventBus.emit("LoadingComplete");
  }
}
