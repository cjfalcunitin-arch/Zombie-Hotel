import { createGrid } from "./level/grid.js";
import { createCharacter } from "./level/character.js";
import { createFloor } from "./level/floor.js";

export class Level1State {
  constructor() {
    this.container = null;
    this.weapon = null;
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
      position: 'relative',
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
    const controlDisplay = document.createElement('div');
    Object.assign(controlDisplay.style, {
      width: '400px',
      height: '250px',
      backgroundColor: 'white',
      border: '2px solid black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid black',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      boxSizing: 'border-box'
    })
    
    /* 🔥 FIRE BUTTON */
    const fireControl = document.createElement('button');
    fireControl.textContent = 'FIRE';
    Object.assign(fireControl.style, {
      height: '50px',
      fontSize: '18px',
      alignSelf: 'center',
      fontWeight: 'bold',
      cursor: 'pointer'
    });
    
    /* 🗡️ WEAPON WRAPPER */
    const weaponWrapper = document.createElement('div');
    Object.assign(weaponWrapper.style, {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      gap: '10px'
    });
    
    /* MAIN WEAPON */
    const mainWeapon = document.createElement('div');
    mainWeapon.textContent = 'Main';
    Object.assign(mainWeapon.style, {
      flex: 1,
      height: '60px',
      border: '2px solid black',
      display: 'flex',
      padding: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    });
    
    /* SECONDARY WEAPON */
    const secondaryWeapon = document.createElement('div');
    secondaryWeapon.textContent = 'Secondary';
    Object.assign(secondaryWeapon.style, {
      flex: 1,
      height: '60px',
      border: '2px solid black',
      display: 'flex',
      padding: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    });
    
    weaponWrapper.appendChild(mainWeapon);
    weaponWrapper.appendChild(secondaryWeapon);
    
    /* 🧰 UTILITIES GRID */
    const utilWrapper = document.createElement('div');
    Object.assign(utilWrapper.style, {
      display: 'grid',
      padding: '10px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '6px'
    });
    
    for (let i = 1; i <= 6; i++) {
      const utilBtn = document.createElement('button');
      utilBtn.textContent = `U${i}`;
      Object.assign(utilBtn.style, {
        height: '45px',
        cursor: 'pointer'
      });
      utilWrapper.appendChild(utilBtn);
    }
    
    /* ===== APPEND ORDER ===== */
    controlDisplay.appendChild(weaponWrapper);
    controlDisplay.appendChild(fireControl);
    controlDisplay.appendChild(utilWrapper);

    // 🔳 GRID (10x10)
    const grid = createGrid(10, 10, gameX, gameY);
    gameDisplay.appendChild(grid);
  
    // 🧍 CHARACTER
    const character = createCharacter();
    // 🧱 FLOOR
    createFloor(gameDisplay, 20);


    gameDisplay.appendChild(character);
    display.appendChild(gameDisplay);
    this.container.appendChild(display);
    this.container.appendChild(display2);
    display2.appendChild(controlDisplay);
    document.body.appendChild(this.container);
  }

  exit() {
    if (this.container?.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
