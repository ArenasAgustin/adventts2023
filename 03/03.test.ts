import findNaughtyStep from "./03";
import { expect, test } from "@jest/globals";

describe("03", () => {
  test("Test 1: tiene que devolver un string", () => {
    expect(typeof findNaughtyStep("abcd", "abcde")).toEqual("string");
  });

  test("Test 2: tiene que devolver 'f'", () => {
    expect(findNaughtyStep("stepfor", "stepor")).toEqual("f");
  });

  test("Test 2: tiene que devolver 'e'", () => {
    expect(findNaughtyStep("abcd", "abcde")).toEqual("e");
  });

  test("Test 3: tiene que devolver ''", () => {
    expect(findNaughtyStep("abcde", "abcde")).toEqual("");
  });
});
