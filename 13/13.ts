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
