/**
 * Escribe una función que reciba un array de números y devuelva un nuevo array donde
 * cada elemento en la posición `i` sea el producto de todos los elementos del array
 * original excepto el de la posición `i`.
 * @param {number[]} arr - Array de números.
 * @returns {number[]} - Nuevo array con los productos.
 */
export const productExceptSelf = (arr) => {
  // Implementa tu solución aquí
  const results = new Array(arr.length);
  const zeros = arr.filter((num) => num === 0);
  const product = arr.filter((num) => num !== 0).reduce((a, b) => a * b);

  if (zeros.length >= 2) return results.fill(0);
  if (zeros.length === 1) results.fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (zeros.length === 0) {
      results[i] = product / arr[i];
    } else if (arr[i] === 0) {
      results[i] = product;
    }
  }

  return results;
};
