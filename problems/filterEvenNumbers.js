/**
 * Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
 * @param {number[]} arr - Array de números.
 * @returns {number[]} - Nuevo array que contiene solo los números pares.
 */
export const filterEvenNumbers = (arr) => {
  // Implementa tu solución aquí
  return arr.filter((num) => num % 2 === 0);
};
