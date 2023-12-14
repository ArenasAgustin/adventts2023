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
