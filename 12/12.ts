function checkIsValidCopy(original: string, copy: string): boolean {
  if (original.length !== copy.length) return false;

  for (let i = 0; i < original.length; i++) {
    const item = original[i];
    const tests = [item, item.toLowerCase(), "#", "+", ":", ".", " "];

    if (item === " " && copy[i] !== " ") return false;
    if (!item.match(/[a-zA-Z#]/) && copy[i] !== item) return false;
    if (!tests.includes(copy[i])) return false;
  }

  return true;
}

export default checkIsValidCopy;
