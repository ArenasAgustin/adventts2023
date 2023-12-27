function findBalancedSegment(message: number[]) {
  let current = [0];

  for (let i = 0; i < message.length; i++) {
    let check = message[i];
    let count = 1;

    for (let j = i + 1; j < message.length; j++) {
      check += message[j];
      count++;

      if (count / check === 2 && count > current[0]) {
        current = [count, i, j];
      }
    }
  }

  return current.slice(1);
}
