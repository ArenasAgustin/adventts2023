/*
 * Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:
 *
 * . = Carretera
 * S = Trineo de Santa
 * * = Barrera abierta
 * | = Barrera cerrada
 * Ejemplo de carretera: S...|....|.....
 *
 * Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
 *
 * Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
 *
 * Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
 *
 * const road = 'S..|...|..'
 * const time = 10 // unidades de tiempo
 * const result = cyberReindeer(road, time)
 *
 * -> result:
 * [
 *   'S..|...|..', // estado inicial
 *   '.S.|...|..', // avanza el trineo la carretera
 *   '..S|...|..', // avanza el trineo la carretera
 *   '..S|...|..', // el trineo para en la barrera
 *   '..S|...|..', // el trineo para en la barrera
 *   '...S...*..', // se abre la barrera, el trineo avanza
 *   '...*S..*..', // avanza el trineo la carretera
 *   '...*.S.*..', // avanza el trineo la carretera
 *   '...*..S*..', // avanza el trineo la carretera
 *   '...*...S..', // avanza por la barrera abierta
 * ]
 * El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.
 *
 * Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
 */

/*
 * function cyberReindeer(road: string, time: number): string[] {
 *   const result: string[] = [road];
 *   let newRoad: string[] = road.split("");
 *
 *   for (let i = 1; i < time; i++) {
 *     const indexClaus = newRoad.indexOf("S");
 *     let newPosition = newRoad[indexClaus + 1];
 *     let clausPosition = newRoad[indexClaus];
 *
 *     if (indexClaus === -1) break;
 *
 *     if (i === 5) {
 *       for (let j = 0; j < newRoad.length; j++) {
 *         if (newRoad[j] === "|") newRoad[j] = "*";
 *       }
 *     }
 *
 *     if (newPosition !== "|" || i >= 5) {
 *       if (road[indexClaus] === "|") clausPosition = "*";
 *       else clausPosition = ".";
 *
 *       newPosition = "S";
 *       newRoad[indexClaus] = clausPosition;
 *       newRoad[indexClaus + 1] = newPosition;
 *     }
 *
 *     result.push(newRoad.join(""));
 *   }
 *
 *   return result;
 * }
 */

function cyberReindeer(road: string, time: number): string[] {
  const result: string[] = [road];
  const auxRoad: string = road;

  for (let i = 1; i < time; i++) {
    const roadArray: string[] = road.split("");
    const sledIndex: number = roadArray.indexOf("S");

    if (sledIndex === -1) break;

    if (roadArray[sledIndex + 1] === "|" && i < 5) {
      result.push(road);
      continue;
    }

    roadArray[sledIndex] = ".";

    if (i > 4) {
      for (let j = 0; j < auxRoad.length; j++) {
        if (auxRoad[j] === "|") roadArray[j] = "*";
      }
    }

    roadArray[sledIndex + 1] = "S";

    road = roadArray.join("");
    result.push(road);
  }

  return result;
}

export default cyberReindeer;
