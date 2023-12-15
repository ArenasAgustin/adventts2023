import getIndexsForPalindrome from "./11";
import { expect, test } from "@jest/globals";

describe("11", () => {
  test("Test 1: tiene que devolver null", () => {
    expect(getIndexsForPalindrome("abac")).toEqual(null);
  });

  test("Test 2: tiene que devolver null", () => {
    expect(getIndexsForPalindrome("caababa")).toEqual(null);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(getIndexsForPalindrome("anna")).toEqual([]);
  });

  test("Test 3: tiene que devolver [1, 3]", () => {
    expect(getIndexsForPalindrome("aaababa")).toEqual([1, 3]);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(getIndexsForPalindrome("saippuakivikauppias")).toEqual([]);
  });
});
