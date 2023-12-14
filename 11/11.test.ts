import createChristmasTree from "./11";
import { expect, test } from "@jest/globals";

describe("10", () => {
  test("Test 1: tiene que devolver null", () => {
    expect(typeof createChristmasTree("abac")).toEqual(null);
  });

  test("Test 2: tiene que devolver null", () => {
    expect(createChristmasTree("caababa")).toEqual(null);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(createChristmasTree("anna")).toEqual([]);
  });

  test("Test 3: tiene que devolver [1, 3]", () => {
    expect(createChristmasTree("aaababa")).toEqual([1, 3]);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(createChristmasTree("saippuakivikauppias")).toEqual([]);
  });
});
