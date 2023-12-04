function manufacture(gifts: string[], materials: string) {
  const map = new Map<string, boolean>();
  const result: string[] = [];

  for (const letter of materials) {
    map.set(letter, true);
  }

  gifts.forEach((gift) => {
    let found = true;

    for (const letter of gift) {
      if (!map.has(letter)) {
        found = false;
        break;
      }
    }

    if (found) {
      result.push(gift);
    }
  });

  return result;
}

export default manufacture;
