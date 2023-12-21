import optimizeIntervals from "./17";
import { expect, test } from "@jest/globals";

describe("17", () => {
  test("Test 1: tiene que devolver number", () => {
    expect(
      Array.isArray(
        optimizeIntervals([
          [2, 7],
          [3, 4],
          [5, 8],
        ])
      )
    ).toEqual(true);
  });

  test("Test 2: tiene que devolver [[2, 8]]", () => {
    expect(
      optimizeIntervals([
        [2, 7],
        [3, 4],
        [5, 8],
      ])
    ).toEqual([[2, 8]]);
  });

  test("Test 3: tiene que devolver [[1, 2],[3, 4],[5, 6]]", () => {
    expect(
      optimizeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("Test 4: tiene que devolver [[5, 8]]", () => {
    expect(
      optimizeIntervals([
        [5, 7],
        [6, 8],
      ])
    ).toEqual([[5, 8]]);
  });

  test("Test 5: tiene que devolver [[1, 5],[6, 10],[11, 15],[16, 20]]", () => {
    expect(
      optimizeIntervals([
        [1, 5],
        [6, 10],
        [11, 15],
        [16, 20],
      ])
    ).toEqual([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ]);
  });
});
