/**
 * Escribe una función que reciba un array de números y devuelva la suma máxima
 * de cualquier subarray contiguo.
 * @param {number[]} arr - Array de números.
 * @returns {number} - Suma máxima del subarray contiguo.
 */
export const maxSubArraySum = (arr) => {
  // Implementa tu solución aquí
  // Kadane’s  algorithm
  let maxCurrent = arr[0];
  let maxTotal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxTotal = Math.max(maxTotal, maxCurrent);
  }

  return maxTotal;
};
