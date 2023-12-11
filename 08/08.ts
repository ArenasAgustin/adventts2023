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
