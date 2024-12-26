import { mergeSortedArrays } from "../problems/mergeSortedArrays";

test("combinar los arrays [1, 3, 5] y [2, 4, 6] debe ser [1, 2, 3, 4, 5, 6]", () => {
  expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("combinar los arrays [10, 20, 30] y [5, 15, 25] debe ser [5, 10, 15, 20, 25, 30]", () => {
  expect(mergeSortedArrays([10, 20, 30], [5, 15, 25])).toEqual([
    5, 10, 15, 20, 25, 30,
  ]);
});

test("combinar los arrays [] y [1, 2, 3] debe ser [1, 2, 3]", () => {
  expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
});

test("combinar los arrays [7, 8, 9] y [] debe ser [7, 8, 9]", () => {
  expect(mergeSortedArrays([7, 8, 9], [])).toEqual([7, 8, 9]);
});

test("combinar los arrays [1, 2, 3] y [4, 5, 6, 7] debe ser [1, 2, 3, 4, 5, 6, 7]", () => {
  expect(mergeSortedArrays([1, 2, 3], [4, 5, 6, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7,
  ]);
});
