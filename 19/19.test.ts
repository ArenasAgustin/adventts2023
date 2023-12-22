import revealSabotage from "./19";
import { expect, test } from "@jest/globals";

describe("19", () => {
  test("Test 1: tiene que devolver number", () => {
    expect(Array.isArray(revealSabotage([["*", " ", "*"]]))).toEqual(true);
  });

  test("Test 2: tiene que devolver un array", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    ).toEqual([
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["1", "2", "1", "1"],
      ["*", "1", " ", " "],
    ]);
  });

  test("Test 3: tiene que devolver un array", () => {
    expect(
      revealSabotage([
        [" ", " ", " "],
        [" ", "*", " "],
        [" ", " ", " "],
      ])
    ).toEqual([
      ["1", "1", "1"],
      ["1", "*", "1"],
      ["1", "1", "1"],
    ]);
  });

  test("Test 4: tiene que devolver un array", () => {
    expect(revealSabotage([["*", " ", "*"]])).toEqual([["*", "2", "*"]]);
  });

  test("Test 5: tiene que devolver un array", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", "*", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "*"],
      ])
    ).toEqual([
      ["*", "1", " ", " ", " "],
      ["1", "2", "1", "1", " "],
      [" ", "1", "*", "1", " "],
      [" ", "1", "1", "2", "1"],
      [" ", " ", " ", "1", "*"],
    ]);
  });
});
