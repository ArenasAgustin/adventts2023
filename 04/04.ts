/*
 * En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
 *
 * Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
 *
 * Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
 *
 * const a = decode('hola (odnum)')
 * console.log(a) // hola mundo
 *
 * const b = decode('(olleh) (dlrow)!')
 * console.log(b) // hello world!
 *
 * const c = decode('sa(u(cla)atn)s')
 * console.log(c) // santaclaus
 *
 * // Paso a paso:
 * // 1. Invertimos el anidado -> sa(ualcatn)s
 * // 2. Invertimos el que queda -> santaclaus
 */

/*
function decode(message: string): string {
  const lastindex: number = message.lastIndexOf("(");
  const firstindex: number = message.indexOf("(");

  if (lastindex === -1 || firstindex === -1) return message;

  if (firstindex === lastindex) {
    const finish: number = message.indexOf(")", firstindex);

    const reverse: string = message
      .slice(firstindex + 1, finish)
      .split("")
      .reverse()
      .join("");

    const newMessage: string = message.replace(
      message.slice(firstindex, finish + 1),
      reverse
    );

    return decode(newMessage);
  }

  const finish: number = message.indexOf(")", lastindex);

  const reverse: string = message
    .slice(lastindex + 1, finish)
    .split("")
    .reverse()
    .join("");

  const newMessage: string = message.replace(
    message.slice(lastindex, finish + 1),
    reverse
  );

  return decode(newMessage);
}
*/

function decode(message: string): string {
  const storage: string[] = [];
  let newMessage: string = "";

  for (let i = 0; i < message.length; i++) {
    if (message[i] === "(") {
      storage.push(newMessage);
      newMessage = "";
    } else if (message[i] === ")") {
      newMessage = newMessage.split("").reverse().join("");
      newMessage = storage.pop() + newMessage;
    } else {
      newMessage += message[i];
    }
  }

  return newMessage;
}

export default decode;
