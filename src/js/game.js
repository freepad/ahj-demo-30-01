export default class Game {
  constructor(element) {
    this._element = element;
  }
  clearAll() {
    const el = document.querySelectorAll(".grid-item");
    el.forEach((element) => {
      element.setAttribute("src", "img/no_goblin.png");
    });
  }

  addGoblin(position) {
    const el = document.querySelectorAll(".grid-item");
    el[position].setAttribute("src", "img/goblin.png");
  }
}
