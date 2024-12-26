import { maxSubArraySum } from "../problems/maxSubArraySum";

test("la suma máxima de subarray en [-2, 1, -3, 4, -1, 2, 1, -5, 4] debe ser 6", () => {
  expect(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("la suma máxima de subarray en [1, 2, 3, 4, 5] debe ser 15", () => {
  expect(maxSubArraySum([1, 2, 3, 4, 5])).toBe(15);
});

test("la suma máxima de subarray en [-1, -2, -3, -4] debe ser -1", () => {
  expect(maxSubArraySum([-1, -2, -3, -4])).toBe(-1);
});

test("la suma máxima de subarray en [10, -2, 3, -1, 2, 5, -2] debe ser 17", () => {
  expect(maxSubArraySum([10, -2, 3, -1, 2, 5, -2])).toBe(17);
});

test("la suma máxima de subarray en [-2, -1, -3, -4, 0, 1, 2, 3, 4, 5] debe ser 15", () => {
  expect(maxSubArraySum([-2, -1, -3, -4, 0, 1, 2, 3, 4, 5])).toBe(15);
});
