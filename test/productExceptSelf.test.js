import { productExceptSelf } from "../problems/productExceptSelf";

test("el producto de todos los elementos excepto el actual en [1, 2, 3, 4] debe ser [24, 12, 8, 6]", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("el producto de todos los elementos excepto el actual en [2, 3, 4, 5] debe ser [60, 40, 30, 24]", () => {
  expect(productExceptSelf([2, 3, 4, 5])).toEqual([60, 40, 30, 24]);
});

test("el producto de todos los elementos excepto el actual en [1, 2, 0, 4] debe ser [0, 0, 8, 0]", () => {
  expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
});

test("el producto de todos los elementos excepto el actual en [-1, -2, -3, -4] debe ser [-24, -12, -8, -6]", () => {
  expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6]);
});

test("el producto de todos los elementos excepto el actual en [5, 1, 1, 1] debe ser [1, 5, 5, 5]", () => {
  expect(productExceptSelf([5, 1, 1, 1])).toEqual([1, 5, 5, 5]);
});
