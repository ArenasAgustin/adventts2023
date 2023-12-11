import createChristmasTree from "./10";
import { expect, test } from "@jest/globals";

describe("10", () => {
  test("Test 1: tiene que devolver un string", () => {
    expect(typeof createChristmasTree("x", 3)).toEqual("string");
  });

  test("Test 2: tiene que devolver '  x\n x x\nx x x\n  |\n'", () => {
    expect(createChristmasTree("x", 3)).toEqual("  x\n x x\nx x x\n  |\n");
  });

  test("Test 3: tiene que devolver '   x\n  o x\n o x o\nx o x o\n   |\n'", () => {
    expect(createChristmasTree("xo", 4)).toEqual(
      "   x\n  o x\n o x o\nx o x o\n   |\n"
    );
  });

  test("Test 3: tiene que devolver '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n'", () => {
    expect(createChristmasTree("123", 5)).toEqual(
      "    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n"
    );
  });

  test("Test 3: tiene que devolver '  *\n @ o\n* @ o\n  |\n'", () => {
    expect(createChristmasTree("*@o", 3)).toEqual("  *\n @ o\n* @ o\n  |\n");
  });
});
