/*
 * Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año,
 * ¡hay que arreglarlas!
 *
 * Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado,
 * siempre deben estar alternadas. Es decir, si la primera luz es roja, la
 * segunda debe ser verde, la tercera roja, la cuarta verde, etc.
 *
 * Nos han pedido que escribamos una función adjustLights que, dado un array de
 * strings con el color de cada luz (representados con los emojis 🔴 para el
 * rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que
 * cambiar para que estén los colores alternos.
 */

function adjustLights(lights: string[]): number {
  let count = 0;

  for (let i = lights.length; i > 0; i--) {
    if (lights[i] === lights[i - 1]) {
      count++;
      lights[i - 1] = lights[i] === "🔴" ? "🟢" : "🔴";
    }
  }

  return count;
}

export default adjustLights;
