function adjustLights(lights: string[]): number {
  let count = 0;
  let prevLight = lights[0];

  for (let i = 1; i < lights.length; i++) {
    if (lights[i] === prevLight) {
      count++;
      lights[i] = lights[i] === "🔴" ? "🟢" : "🔴";
    }

    prevLight = lights[i];
  }

  return count;
}

export default adjustLights;
