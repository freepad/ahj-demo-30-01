import Game from "../src/js/game.js";

import { JSDOM } from "jsdom";

jest.mock("../src/js/game.js");

beforeEach(() => {
  jest.restoreAllMocks();
});

it("ClearAll", () => {
  // const parser = new DOMParser();
  const dom = new JSDOM(
    `<div class="grid">
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

</div>`,
    "text/html"
  );
  const document = dom.window.document;
  const game = new Game();
  console.log(game);

  jest
    .spyOn(dom.window.document, "querySelectorAll")
    .mockImplementationOnce((selector) =>
      dom.window.document.querySelectorAll(selector)
    );

  // clearAll();
  // addGoblin(2)

  expect(
    dom.window.document.querySelectorAll(".grid-item")[0].getAttribute("src")
  ).toEqual("img/no_goblin.png");
});
