import { reverseArray } from "../problems/reverseArray";

test("invertir los elementos de [1, 2, 3, 4, 5] debe ser [5, 4, 3, 2, 1]", () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("invertir los elementos de [10, -2, 3, 1] debe ser [1, 3, -2, 10]", () => {
  expect(reverseArray([10, -2, 3, 1])).toEqual([1, 3, -2, 10]);
});

test("invertir los elementos de [-1, -2, -3, -4] debe ser [-4, -3, -2, -1]", () => {
  expect(reverseArray([-1, -2, -3, -4])).toEqual([-4, -3, -2, -1]);
});

test("invertir los elementos de [0, 0, 0, 0] debe ser [0, 0, 0, 0]", () => {
  expect(reverseArray([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("invertir los elementos de [100, 200, 300, 400, 500] debe ser [500, 400, 300, 200, 100]", () => {
  expect(reverseArray([100, 200, 300, 400, 500])).toEqual([
    500, 400, 300, 200, 100,
  ]);
});
