/**
 * Escribe una función que reciba dos arrays de números ordenados en orden ascendente
 * y los combine en un solo array también ordenado en orden ascendente.
 * @param {number[]} arr1 - Primer array ordenado.
 * @param {number[]} arr2 - Segundo array ordenado.
 * @returns {number[]} - Nuevo array combinado y ordenado.
 */
export const mergeSortedArrays = (arr1, arr2) => {
  // Implementa tu solución aquí
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
