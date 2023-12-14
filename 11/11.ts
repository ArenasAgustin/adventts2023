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
