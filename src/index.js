import { getPosition } from "./js/app.js";
import Game from "./js/game.js";

const game = new Game();
// console.log(game);
let positionNow = 0;
const chngInterval = setInterval(() => {
  game.clearAll();
  positionNow = getPosition(positionNow);
  game.addGoblin(positionNow);
}, 1000);
