/*
 * En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse
 * en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío
 * de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM',
 * cree una representación visual de esta hora en un reloj digital devolviendo un array de
 * arrays de caracteres.
 *
 * La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas
 * y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco ().
 * Entre cada dígito hay una columna vacía.
 *
 * Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y
 * siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9,
 * respectivamente (nota: la indexación de filas y columnas comienza en 0).
 *
 * Por ejemplo, si la función recibe 01:30 debe devolver:
 *
 * drawClock('01:30') // ⬇️
 *
 * [
 *   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
 *   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
 *   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
 *   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
 *   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
 *   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
 *   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
 * ]
 */

function drawClock(time: string): string[][] {
  const clock = Array.from({ length: 7 }, () => Array(17).fill(" "));

  const numbers = time.split(":").join("").split("");
  const indexes = [0, 4, 10, 14];

  clock[2][8] = "*";
  clock[4][8] = "*";

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const number = numbers[i];

    switch (number) {
      case "0":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, "*", " ", "*");
        clock[2].splice(index, 3, "*", " ", "*");
        clock[3].splice(index, 3, "*", " ", "*");
        clock[4].splice(index, 3, "*", " ", "*");
        clock[5].splice(index, 3, "*", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "1":
        clock[0].splice(index, 3, " ", " ", "*");
        clock[1].splice(index, 3, " ", " ", "*");
        clock[2].splice(index, 3, " ", " ", "*");
        clock[3].splice(index, 3, " ", " ", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, " ", " ", "*");
        break;

      case "2":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, " ", " ", "*");
        clock[2].splice(index, 3, " ", " ", "*");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, "*", " ", " ");
        clock[5].splice(index, 3, "*", " ", " ");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "3":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, " ", " ", "*");
        clock[2].splice(index, 3, " ", " ", "*");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "4":
        clock[0].splice(index, 3, "*", " ", "*");
        clock[1].splice(index, 3, "*", " ", "*");
        clock[2].splice(index, 3, "*", " ", "*");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, " ", " ", "*");
        break;

      case "5":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, "*", " ", " ");
        clock[2].splice(index, 3, "*", " ", " ");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "6":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, "*", " ", " ");
        clock[2].splice(index, 3, "*", " ", " ");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, "*", " ", "*");
        clock[5].splice(index, 3, "*", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "7":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, " ", " ", "*");
        clock[2].splice(index, 3, " ", " ", "*");
        clock[3].splice(index, 3, " ", " ", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, " ", " ", "*");
        break;

      case "8":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, "*", " ", "*");
        clock[2].splice(index, 3, "*", " ", "*");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, "*", " ", "*");
        clock[5].splice(index, 3, "*", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;

      case "9":
        clock[0].splice(index, 3, "*", "*", "*");
        clock[1].splice(index, 3, "*", " ", "*");
        clock[2].splice(index, 3, "*", " ", "*");
        clock[3].splice(index, 3, "*", "*", "*");
        clock[4].splice(index, 3, " ", " ", "*");
        clock[5].splice(index, 3, " ", " ", "*");
        clock[6].splice(index, 3, "*", "*", "*");
        break;
    }
  }

  return clock;
}

export default drawClock;
