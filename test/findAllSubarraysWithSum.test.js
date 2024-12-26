import { findAllSubarraysWithSum } from "../problems/findAllSubarraysWithSum";

test("encontrar subarrays que suman 5 en [1, 2, 3, 4, 5] debe ser [[2, 3], [5]]", () => {
  expect(findAllSubarraysWithSum([1, 2, 3, 4, 5], 5)).toEqual([[2, 3], [5]]);
});

test("encontrar subarrays que suman 7 en [1, 2, 3, 4, 3] debe ser [[3, 4], [4, 3]]", () => {
  expect(findAllSubarraysWithSum([1, 2, 3, 4, 3], 7)).toEqual([
    [3, 4],
    [4, 3],
  ]);
});

test("encontrar subarrays que suman 6 en [1, 2, 3, 4, 1, 2] debe ser [[1, 2, 3], [4, 1, 1]]", () => {
  expect(findAllSubarraysWithSum([1, 2, 3, 4, 1, 2], 6)).toEqual([[1, 2, 3]]);
});

test("encontrar subarrays que suman 8 en [1, 1, 1, 1, 1, 1, 1, 1] debe ser [[1, 1, 1, 1, 1, 1, 1, 1]]", () => {
  expect(findAllSubarraysWithSum([1, 1, 1, 1, 1, 1, 1, 1], 8)).toEqual([
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]);
});
