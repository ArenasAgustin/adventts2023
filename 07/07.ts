function drawGift(size: number, symbol: string): string {
  let result: string = "";
  let space: number = size - 1;
  let symbolCount: number = size;

  for (let i = 0; i < size * 2 - 1; i++) {
    for (let j = 0; j < space; j++) {
      result += " ";
    }

    for (let k = 0; k < symbolCount; k++) {
      if (i % (size - 1) === 0 && k < size) {
        result += "#";
      } else if (k % (size - 1) === 0) {
        result += "#";
      } else if (k === symbolCount - 1) {
        result += "#";
      } else {
        result += symbol;
      }
    }

    if (i < size - 1) {
      space--;
      symbolCount += 1;
    } else {
      symbolCount -= 1;
    }

    result += "\n";
  }

  return result;
}

export default drawGift;
