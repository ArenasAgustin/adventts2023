import maxGifts from "./14";
import { expect, test } from "@jest/globals";

describe("14", () => {
  test("Test 1: tiene que devolver number", () => {
    expect(typeof maxGifts([1, 2, 3, 1])).toEqual("number");
  });

  test("Test 2: tiene que devolver 4", () => {
    expect(maxGifts([1, 2, 3, 1])).toEqual(4);
  });

  test("Test 3: tiene que devolver 12", () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toEqual(12);
  });

  test("Test 3: tiene que devolver 99", () => {
    expect(maxGifts([99])).toEqual(99);
  });

  test("Test 3: tiene que devolver 1", () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toEqual(1);
  });
});
