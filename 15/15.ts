function autonomousDrive(store: string[], movements: string[]): string[] {
  let positionX: number = 0;
  let positionY: number = 0;
  let newStore: string[][] = [[]];
  let result: string[] = [];

  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] === "!") {
        positionX = j;
        positionY = i;
      }
    }
  }

  for (let i = 0; i < store.length; i++) {
    newStore[i] = store[i].split("");
  }

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case "R":
        if (positionX < store[0].length - 1) {
          if (newStore[positionY][positionX + 1] !== "*") {
            newStore[positionY][positionX] = ".";
            positionX++;
            newStore[positionY][positionX] = "!";
          }
        }
        break;

      case "L":
        if (positionX > 0) {
          if (newStore[positionY][positionX - 1] !== "*") {
            newStore[positionY][positionX] = ".";
            positionX--;
            newStore[positionY][positionX] = "!";
          }
        }
        break;

      case "D":
        if (positionY < store.length - 1) {
          if (newStore[positionY + 1][positionX] !== "*") {
            newStore[positionY][positionX] = ".";
            positionY++;
            newStore[positionY][positionX] = "!";
          }
        }
        break;

      case "U":
        if (positionY > 0) {
          if (newStore[positionY - 1][positionX] !== "*") {
            newStore[positionY][positionX] = ".";
            positionY--;
            newStore[positionY][positionX] = "!";
          }
        }
        break;
    }
  }

  for (let i = 0; i < newStore.length; i++) {
    result.push(newStore[i].join(""));
  }

  return result;
}

console.log(
  autonomousDrive(
    [".**.*.*.", ".***....", "..!....."],
    ["D", "U", "R", "R", "R"]
  )
);

export default autonomousDrive;
