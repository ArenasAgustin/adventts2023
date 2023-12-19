/*
 * Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para
 * calcular si van sobrados o no de tiempo ⏳.
 *
 * Para ello te pasan un array con la duración de cada entrega. El formato de
 * la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite
 * de tiempo es 07:00:00.
 *
 * Tu función debe devolver el tiempo que les faltará o el tiempo que les
 * sobrará para terminar las entregas. El formato de la duración devuelta debe
 * ser HH:mm:ss.
 *
 * Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe
 * ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos,
 * devuelve -01:30:00
 */

function calculateTime(deliveries: string[]): string {
  let minutes: number = 0;
  let seconds: number = 0;
  let hours: number = 0;
  let max: number = 7 * 60 * 60;
  let total: number = 0;
  let result: string = "";

  for (const delivery of deliveries) {
    const [h, m, s] = delivery.split(":").map((item) => parseInt(item));

    total += h * 60 * 60;
    total += m * 60;
    total += s;
  }

  if (total < max) {
    result = "-";
  }

  total = Math.abs(max - total);

  hours = Math.floor(total / 3600);
  minutes = Math.floor(total / 60) % 60;
  seconds = Math.floor(total % 60);

  result += `${hours < 10 ? "0" + hours : hours}:`;
  result += `${minutes < 10 ? "0" + minutes : minutes}:`;
  result += `${seconds < 10 ? "0" + seconds : seconds}`;

  return result;
}

export default calculateTime;
