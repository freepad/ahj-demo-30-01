import noGoblinImg from "../img/no_goblin.png";
import goblimImg from "../img/goblin.png";

export default class Game {
  constructor(element) {
    this._element = element;
  }
  clearAll() {
    const el = this._element.querySelectorAll(".grid-item");
    el.forEach((element) => {
      element.setAttribute("src", noGoblinImg);
      element.removeAttribute("data-active");
    });
  }

  addGoblin(position) {
    const el = this._element.querySelectorAll(".grid-item");
    el[position].setAttribute("src", goblimImg);
    el[position].dataset.active = "true";
  }
}

// const game = new Game();
// const game2 = new Game();
// // game1 this.el !== game2 this.el
