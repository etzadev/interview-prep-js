/**
 * Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.
 * @param {number[]} arr - Array de números.
 * @returns {number} - Suma de todos los elementos del array.
 */
export const sumArray = (arr) => {
  // Implementa tu solución aquí
  return arr.reduce((acc, current) => acc + current);
};
