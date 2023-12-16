function maxGifts(houses: number[]): number {
  let include = 0;
  let exclude = 0;
  let newExclude = 0;

  for (let i = 0; i < houses.length; i++) {
    newExclude = Math.max(include, exclude);

    include = exclude + houses[i];
    exclude = newExclude;
  }

  return Math.max(include, exclude);
}

export default maxGifts;
