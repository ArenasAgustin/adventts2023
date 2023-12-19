function autonomousDrive(store: string[], movements: string[]): string[] {
  let y: number = store.findIndex((x) => x.includes("!"));
  let x: number = store[y].indexOf("!");

  store[y] = store[y].substring(0, x) + "." + store[y].substring(x + 1);

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case "R":
        if (x < store[0].length - 1) {
          if (store[y][x + 1] !== "*") {
            x++;
          }
        }
        break;

      case "L":
        if (x > 0) {
          if (store[y][x - 1] !== "*") {
            x--;
          }
        }
        break;

      case "D":
        if (y < store.length - 1) {
          if (store[y + 1][x] !== "*") {
            y++;
          }
        }
        break;

      case "U":
        if (y > 0) {
          if (store[y - 1][x] !== "*") {
            y--;
          }
        }
        break;
    }
  }

  store[y] = store[y].substring(0, x) + "!" + store[y].substring(x + 1);

  return store;
}

console.log(
  autonomousDrive(
    [".**.*.*.", ".***....", "..!....."],
    ["D", "U", "R", "R", "R"]
  )
);

export default autonomousDrive;
