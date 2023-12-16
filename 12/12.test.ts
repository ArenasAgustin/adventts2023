import checkIsValidCopy from "./12";
import { expect, test } from "@jest/globals";

describe("12", () => {
  test("Test 1: tiene que devolver boolean", () => {
    expect(
      typeof checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")
    ).toEqual("boolean");
  });

  test("Test 2: tiene que devolver false", () => {
    expect(
      checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")
    ).toEqual(false);
  });

  test("Test 3: tiene que devolver false", () => {
    expect(checkIsValidCopy("Santa Claus", "###:. c:+##")).toEqual(false);
  });

  test("Test 3: tiene que devolver [1, 3]", () => {
    expect(checkIsValidCopy("S#nta Claus", "S#ntA ClauS")).toEqual(true);
  });

  test("Test 3: tiene que devolver []", () => {
    expect(checkIsValidCopy("3 #egalos", "3 .+:# #:")).toEqual(false);
  });
});
