import { concatenateArrays } from "../problems/concatenateArrays";

test("concatenar los arrays [1, 2, 3] y [4, 5, 6] debe ser [1, 2, 3, 4, 5, 6]", () => {
  expect(concatenateArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("concatenar los arrays [] y [1, 2, 3] debe ser [1, 2, 3]", () => {
  expect(concatenateArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
});

test("concatenar los arrays [10, 20, 30] y [] debe ser [10, 20, 30]", () => {
  expect(concatenateArrays([10, 20, 30], [])).toEqual([10, 20, 30]);
});

test("concatenar los arrays [1] y [2] debe ser [1, 2]", () => {
  expect(concatenateArrays([1], [2])).toEqual([1, 2]);
});

test("concatenar los arrays [1, 2, 3] y [1, 2, 3] debe ser [1, 2, 3, 1, 2, 3]", () => {
  expect(concatenateArrays([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
});
