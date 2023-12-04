import manufacture from "./02";
import { expect, test } from "@jest/globals";

describe("02", () => {
  test("Test 1: tiene que devolver un array", () => {
    expect(
      Array.isArray(manufacture(["tren", "oso", "pelota"], "tronesa"))
    ).toEqual(true);
  });

  test("Test 2: tiene que devolver ['tren', 'oso']", () => {
    expect(manufacture(["tren", "oso", "pelota"], "tronesa")).toEqual([
      "tren",
      "oso",
    ]);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(manufacture(["libro", "ps5"], "psli")).toEqual([]);
  });
});
