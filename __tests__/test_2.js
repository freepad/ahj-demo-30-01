/**
 * @jest-environment jsdom
 */

import Game from "../src/js/game.js";

// jest.mock("../src/js/game.js");

beforeEach(() => {
  document.body.innerHTML = `
  <div class="grid">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
  <img class="grid-item" src="img/no_goblin.png" alt="goblin">
</div>
  `;
});

describe("Test Game", () => {
  it("method addGoblin", () => {
    const game = new Game(document.body);
    expect(
      document.querySelectorAll(".grid-item")[0].getAttribute("data-active")
    ).toEqual(null);
    game.addGoblin(0);
    expect(
      document.querySelectorAll(".grid-item")[0].getAttribute("data-active")
    ).toEqual("true");
  });

  it("ClearAll", () => {
    const game = new Game(document.body);
    game.addGoblin(0);
    expect(
      document.querySelectorAll(".grid-item")[0].getAttribute("data-active")
    ).toEqual("true");
    game.clearAll();
    expect(
      document.querySelectorAll(".grid-item")[0].getAttribute("data-active")
    ).toEqual(null);
  });
});
