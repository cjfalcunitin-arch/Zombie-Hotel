import EventBus from './Game/event.js';
import { LoadingState } from './Game/loading.js';
import { MainMenuState } from './Game/mainmenu.js';
import { Level1State } from './Game/level1.js';

const loadingState = new LoadingState();
const mainMenuState = new MainMenuState();
const level1State = new Level1State();

const debug1 = true;

function startGame() {

  EventBus.on("startLevel1", () => {
    level1State.enter();
  });

  EventBus.on("loadingComplete", () => {
    mainMenuState.enter();
  });

  if (debug1) {
    mainMenuState.enter();
    return;
  }

  loadingState.enter();
}

startGame();
