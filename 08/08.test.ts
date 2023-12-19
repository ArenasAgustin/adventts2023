import organizeGifts from "./08";
import { expect, test } from "@jest/globals";

describe("08", () => {
  test("Test 1: tiene que devolver un string", () => {
    expect(typeof organizeGifts("76a11b")).toEqual("string");
  });

  test("Test 2: tiene que devolver '[a]{a}{a}(aaaaaa){b}(b)'", () => {
    expect(organizeGifts("76a11b")).toEqual("[a]{a}{a}(aaaaaa){b}(b)");
  });

  test("Test 3: tiene que devolver '{a}{a}'", () => {
    expect(organizeGifts("20a")).toEqual("{a}{a}");
  });

  test("Test 4: tiene que devolver '[b]{b}{b}[a][a]{a}{a}(cccc)'", () => {
    expect(organizeGifts("70b120a4c")).toEqual("[b]{b}{b}[a][a]{a}{a}(cccc)");
  });

  test("Test 5: tiene que devolver '{d}(ddddddddd)[e](e)'", () => {
    expect(organizeGifts("19d51e")).toEqual("{d}(ddddddddd)[e](e)");
  });
});
