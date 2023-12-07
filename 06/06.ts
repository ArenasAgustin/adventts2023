function maxDistance(movements: string): number {
  let maxDistance: number = 0;
  let currentDistance: number = 0;
  let wildcard: number = 0;

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") currentDistance++;
    else if (movements[i] === "<") currentDistance--;
    else if (movements[i] === "*") wildcard++;

    maxDistance = Math.abs(currentDistance) + wildcard;
  }

  return maxDistance;
}

export default maxDistance;
