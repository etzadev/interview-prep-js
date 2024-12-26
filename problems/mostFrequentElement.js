/**
 * Escribe una función que reciba un array de números y devuelva el elemento que aparece
 * más veces en el array. Si hay un empate, devuelve cualquiera de los elementos que empatan.
 * @param {number[]} arr - Array de números.
 * @returns {number} - El elemento que aparece más veces.
 */
export const mostFrequentElement = (arr) => {
  // Implementa tu solución aquí
  const frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  return parseInt(
    Object.keys(frequency).reduce((a, b) =>
      frequency[a] > frequency[b] ? a : b
    )
  );
};
