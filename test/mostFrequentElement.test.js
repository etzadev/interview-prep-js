import { mostFrequentElement } from "../problems/mostFrequentElement";

test("el elemento que aparece más veces en [1, 3, 2, 3, 4, 3, 5, 1] debe ser 3", () => {
  expect(mostFrequentElement([1, 3, 2, 3, 4, 3, 5, 1])).toBe(3);
});

test("el elemento que aparece más veces en [1, 2, 2, 3, 4, 4, 4, 5] debe ser 4", () => {
  expect(mostFrequentElement([1, 2, 2, 3, 4, 4, 4, 5])).toBe(4);
});

test("el elemento que aparece más veces en [10, 20, 10, 30, 10, 40, 20] debe ser 10", () => {
  expect(mostFrequentElement([10, 20, 10, 30, 10, 40, 20])).toBe(10);
});

test("el elemento que aparece más veces en [5, 5, 5, 5, 5, 5, 5, 5] debe ser 5", () => {
  expect(mostFrequentElement([5, 5, 5, 5, 5, 5, 5, 5])).toBe(5);
});

test("el elemento que aparece más veces en [1, 1, 1, 2, 2, 2, 3, 3] debe ser 1 o 2", () => {
  const result = mostFrequentElement([1, 1, 1, 2, 2, 2, 3, 3]);
  expect(result === 1 || result === 2).toBe(true);
});
