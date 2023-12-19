/*
 * Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁
 * para la víspera de Navidad 🎄.
 *
 * El formato de entrada es especial, ya que indica el número de regalos y el tipo
 * de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos
 * a y 11 regalos b.
 *
 * Los elfos tienen un sistema especial para organizar los regalos:
 *
 * Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}.
 * Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
 * Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas
 * de a se apilan en 2 palés de esta manera: [a][a]
 * Cualquier regalo adicional se coloca en una bolsa, representada por () y se
 * colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
 * Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los
 * regalos aparecen en el mismo orden que la cadena de entrada.
 *
 * Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como
 * argumento y devuelva una cadena representando el almacén.
 */

function organizeGifts(gifts: string): string {
  const giftCounts: { [key: string]: number } = {};
  let numeroActual: number | null = null;

  for (const char of gifts) {
    if (/^\d$/.test(char)) {
      if (numeroActual === null) {
        numeroActual = parseInt(char, 10);
      } else {
        numeroActual = numeroActual * 10 + parseInt(char, 10);
      }
    } else if (/^[a-zA-Z]$/.test(char) && numeroActual !== null) {
      giftCounts[char] = numeroActual;
      numeroActual = null;
    }
  }

  let result = "";

  for (const giftType in giftCounts) {
    const giftCount = giftCounts[giftType];

    let palletCount = Math.floor(giftCount / 50);
    let boxCount = Math.floor((giftCount % 50) / 10);
    let giftCountLeft = giftCount % 10;

    result += `[${giftType}]`.repeat(palletCount);
    result += `{${giftType}}`.repeat(boxCount);

    if (giftCountLeft > 0) {
      result += "(" + `${giftType}`.repeat(giftCountLeft) + ")";
    }
  }

  return result;
}

export default organizeGifts;
