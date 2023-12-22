/*
 * ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el
 * almacén y ha saboteado algunos de los juguetes 💣.
 *
 * Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos
 * antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que
 * es una matriz.
 *
 * Los * representan los juguetes saboteados y las celdas vacías con un espacio en
 * blanco son los lugares seguros.
 *
 * Tu tarea es escribir una función que devuelva la misma matriz pero, en cada
 * posición, nos indique el número de juguetes saboteados que hay en las celdas
 * adyacentes.
 *
 * Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda
 * no toca ningún juguete saboteado, debe contener un espacio en blanco .
 *
 * const store = [
 *   ['*', ' ', ' ', ' '],
 *   [' ', ' ', '*', ' '],
 *   [' ', ' ', ' ', ' '],
 *   ['*', ' ', ' ', ' ']
 * ]
 *
 * console.log(revealSabotage(store))
 * Debería mostrar:
 * [
 *     ['*', '2', '1', '1'],
 *     ['1', '2', '*', '1'],
 *     ['1', '2', '1', '1'],
 *     ['*', '1', ' ', ' ']
 * ]
 *
 * Ten en cuenta que…
 *
 * Las celdas diagonales también se consideran adyacentes.
 * El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
 * El tablero puede tener cualquier tamaño.
 * Los números son cadenas de texto.
 */

function revealSabotage(store: string[][]): string[][] {
  let prevRow;
  let nextRow;

  for (let i = 0; i < store.length; i++) {
    nextRow = store[i + 1];

    for (let j = 0; j < store[i].length; j++) {
      let cell = store[i][j];
      let count = 0;

      if (cell !== "*") {
        count += prevRow?.[j - 1] === "*" ? 1 : 0;
        count += prevRow?.[j] === "*" ? 1 : 0;
        count += prevRow?.[j + 1] === "*" ? 1 : 0;

        count += store[i][j - 1] === "*" ? 1 : 0;
        count += store[i][j + 1] === "*" ? 1 : 0;

        count += nextRow?.[j - 1] === "*" ? 1 : 0;
        count += nextRow?.[j] === "*" ? 1 : 0;
        count += nextRow?.[j + 1] === "*" ? 1 : 0;

        if (count > 0) {
          store[i][j] = count.toString();
        }
      }
    }

    prevRow = store[i];
  }

  return store;
}

export default revealSabotage;
