import { getPosition } from "../src/js/app";
import Game from "../src/js/game.js";

test("random_1", () => {
  const result = [0, 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9];
  const allRand = new Set();
  for (let i = 1; i <= 100; i++) {
    allRand.add(getPosition(i));
  }
  expect(Array.from(allRand).sort()).toEqual(result);
});
test("random_2", () => {
  const result = 0;
  expect(getPosition(result)).not.toBe(result);
});
test("class", () => {
  const game = new Game();
  expect(game).toBeInstanceOf(Game);
});
