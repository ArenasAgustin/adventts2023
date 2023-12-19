/*
 * Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.
 *
 * Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.
 *
 * El almacén se representa como un array de cadenas de texto, donde:
 *
 * . significa que hay vía libre.
 * * significa que hay un obstáculo.
 * ! es la posición inicial del robot.
 * Los movimientos son un array de cadenas de texto, donde:
 *
 * R mueve al robot una posición a la derecha.
 * L mueve al robot una posición a la izquierda.
 * U mueve al robot una posición hacia arriba.
 * D mueve al robot una posición hacia abajo.
 * Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.
 *
 * Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.
 */

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
