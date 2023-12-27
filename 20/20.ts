function distributeGifts(weights: Array<Array<number | null>>): number[][] {
  let newWights = [] as number[][];

  for (let i = 0; i < weights.length; i++) {
    newWights[i] = [];

    for (let j = 0; j < weights[i].length; j++) {
      const numbers: number[] = [];

      if (weights[i - 1]?.[j]) {
        numbers.push(weights[i - 1][j] as number);
      }

      if (j - 1 >= 0) {
        if (weights[i][j - 1]) {
          numbers.push(weights[i][j - 1] as number);
        }
      }

      if (weights[i][j]) {
        numbers.push(weights[i][j] as number);
      }

      if (j + 1 < weights[0].length) {
        if (weights[i][j + 1]) {
          numbers.push(weights[i][j + 1] as number);
        }
      }

      if (weights[i + 1]?.[j]) {
        numbers.push(weights[i + 1][j] as number);
      }

      let sum: number = numbers.reduce((a, b) => a + b, 0);

      newWights[i][j] = Math.round(sum / numbers.length);
    }
  }

  return newWights;
}
