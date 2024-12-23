import { maxElement } from "../problems/maxElement";

test("el elemento más grande de [1, 2, 3, 4, 5] debe ser 5", () => {
  expect(maxElement([1, 2, 3, 4, 5])).toBe(5);
});

test("el elemento más grande de [10, -2, 3, 1] debe ser 10", () => {
  expect(maxElement([10, -2, 3, 1])).toBe(10);
});

test("el elemento más grande de [-1, -2, -3, -4] debe ser -1", () => {
  expect(maxElement([-1, -2, -3, -4])).toBe(-1);
});

test("el elemento más grande de [0, 0, 0, 0] debe ser 0", () => {
  expect(maxElement([0, 0, 0, 0])).toBe(0);
});

test("el elemento más grande de [100, 200, 300, 400, 500] debe ser 500", () => {
  expect(maxElement([100, 200, 300, 400, 500])).toBe(500);
});
