import { sumArray } from "../problems/sumArray";

test("suma de los elementos de [1, 2, 3, 4, 5] debe ser 15", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test("suma de los elementos de [10, -2, 3, 1] debe ser 12", () => {
  expect(sumArray([10, -2, 3, 1])).toBe(12);
});

test("suma de los elementos de [-1, -2, -3, -4] debe ser -10", () => {
  expect(sumArray([-1, -2, -3, -4])).toBe(-10);
});

test("suma de los elementos de [0, 0, 0, 0] debe ser 0", () => {
  expect(sumArray([0, 0, 0, 0])).toBe(0);
});

test("suma de los elementos de [100] debe ser 100", () => {
  expect(sumArray([100])).toBe(100);
});
