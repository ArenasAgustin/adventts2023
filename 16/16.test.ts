import transformTree from "./16";
import { expect, test } from "@jest/globals";

describe("16", () => {
  test("Test 1: tiene que devolver un object", () => {
    expect(typeof transformTree([])).toEqual("object");
  });

  test("Test 2: tiene que devolver null", () => {
    expect(transformTree([])).toEqual(null);
  });

  test("Test 3: tiene que devolver un tree", () => {
    expect(transformTree([1, 2, 3])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    });
  });

  test("Test 4: tiene que devolver ['.**.*.*.', '.***....', '.....!..']", () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 12,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    });
  });

  test("Test 5: tiene que devolver tree", () => {
    expect(
      transformTree([
        2,
        7,
        5,
        null,
        6,
        null,
        9,
        null,
        null,
        1,
        11,
        null,
        null,
        null,
        10,
      ])
    ).toEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    });
  });
});
