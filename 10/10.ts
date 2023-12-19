/*
 * ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un
 * árbol de Navidad 🎄 personalizado en cuestión de segundos.
 *
 * Para crearlo nos pasan una cadena de caracteres para formar el árbol y un
 * número que indica la altura del mismo.
 *
 * Cada carácter de la cadena representa un adorno del árbol, y vamos
 * utilizándolos de forma cíclica hasta llegar a la altura indicada. Como
 * mínimo siempre nos pasarán uno.
 *
 * Debemos devolver un string multilínea con el árbol de Navidad formado con
 * los adornos, la altura indicada más una última línea con el tronco formado
 * por el carácter | en el centro y, finalmente, un salto de línea \n.
 *
 * Por ejemplo si recibimos la cadena "123" y el número 4 como altura,
 * tendríamos que construir este árbol:
 *
 *    1
 *   2 3
 *  1 2 3
 * 1 2 3 1
 *    |
 * Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:
 *
 *   *
 *  @ o
 * * @ o
 *   |
 */

function createChristmasTree(ornaments: string, height: number): string {
  let tree = "";
  let space: number = height - 1;
  let symbolCount: number = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < space; j++) {
      tree += " ";
    }

    for (let k = 0; k <= i; k++) {
      tree += ornaments[symbolCount];
      symbolCount = (symbolCount + 1) % ornaments.length;

      if (k < i) {
        tree += " ";
      }
    }

    tree += "\n";
    space--;
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}

export default createChristmasTree;
