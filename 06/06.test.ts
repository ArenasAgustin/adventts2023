import maxDistance from "./06";
import { expect, test } from "@jest/globals";

describe("06", () => {
  test("Test 1: tiene que devolver un number", () => {
    expect(typeof maxDistance(">>*<")).toEqual("number");
  });

  test("Test 2: tiene que devolver 2", () => {
    expect(maxDistance(">>*<")).toEqual(2);
  });

  test("Test 3: tiene que devolver 5", () => {
    expect(maxDistance("<<<<<")).toEqual(5);
  });

  test("Test 3: tiene que devolver 5", () => {
    expect(maxDistance(">***>")).toEqual(5);
  });

  test("Test 3: tiene que devolver 5", () => {
    expect(maxDistance("<<**>>")).toEqual(2);
  });
});
