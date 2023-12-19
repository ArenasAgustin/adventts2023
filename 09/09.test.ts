import adjustLights from "./09";
import { expect, test } from "@jest/globals";

describe("09", () => {
  test("Test 1: tiene que devolver un number", () => {
    expect(typeof adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toEqual(
      "number"
    );
  });

  test("Test 2: tiene que devolver 1", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toEqual(1);
  });

  test("Test 3: tiene que devolver 2", () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toEqual(2);
  });

  test("Test 4: tiene que devolver 0", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toEqual(0);
  });

  test("Test 5: tiene que devolver 1", () => {
    expect(
      adjustLights([
        "🔴",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
        "🔴",
        "🟢",
      ])
    ).toEqual(1);
  });
});
