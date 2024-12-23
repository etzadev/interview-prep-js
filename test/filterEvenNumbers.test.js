import { filterEvenNumbers } from "../problems/filterEvenNumbers";

test("filtrar los números pares de [1, 2, 3, 4, 5] debe ser [2, 4]", () => {
  expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test("filtrar los números pares de [10, -2, 3, 1] debe ser [10, -2]", () => {
  expect(filterEvenNumbers([10, -2, 3, 1])).toEqual([10, -2]);
});

test("filtrar los números pares de [-1, -2, -3, -4] debe ser [-2, -4]", () => {
  expect(filterEvenNumbers([-1, -2, -3, -4])).toEqual([-2, -4]);
});

test("filtrar los números pares de [0, 0, 0, 0] debe ser [0, 0, 0, 0]", () => {
  expect(filterEvenNumbers([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("filtrar los números pares de [100, 201, 302, 403, 504] debe ser [100, 302, 504]", () => {
  expect(filterEvenNumbers([100, 201, 302, 403, 504])).toEqual([100, 302, 504]);
});
