/*
 * En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno
 * especial: un desafío para formar un palíndromo navideño.
 *
 * Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los
 * elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un
 * intercambio de letras.
 *
 * Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y
 * devolverá:
 *
 * Si ya es un palíndromo, un array vacío.
 * Si no es posible, null.
 * Si se puede formar un palíndromo con un cambio, un array con las dos posiciones
 * (índices) que se deben intercambiar para poder crearlo.
 */

function getIndexsForPalindrome(word: string): number[] | null {
  const isPalindrome = (word: string): boolean =>
    word === word.split("").reverse().join("");

  if (isPalindrome(word)) return [];

  const length: number = word.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let subWord: string[] = word.split("");

      subWord.splice(i, 1, word[j]);
      subWord.splice(j, 1, word[i]);

      if (isPalindrome(subWord.join(""))) return [i, j];
    }
  }

  return null;
}

export default getIndexsForPalindrome;
