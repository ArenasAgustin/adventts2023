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
