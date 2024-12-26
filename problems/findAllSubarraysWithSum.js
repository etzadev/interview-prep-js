/**
import { sumArray } from './sumArray';
 * Escribe una función que reciba un array de números y un número `target`,
 * y devuelva todos los subarrays contiguos que sumen exactamente `target`.
 * @param {number[]} arr - Array de números.
 * @param {number} target - Suma objetivo.
 * @returns {number[][]} - Lista de subarrays que suman `target`.
 */
export const findAllSubarraysWithSum = (arr, target) => {
  // Implementa tu solución aquí
  const result = [];
  const data = {
    0: -1,
  };
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (data.hasOwnProperty(currentSum - target)) {
      let keyInitial = data[currentSum - target];

      result.push(arr.slice(keyInitial + 1, i + 1));
    } else {
      data[currentSum] = i;
    }
  }

  return result;
};
