import decode from "./04";
import { expect, test } from "@jest/globals";

describe("04", () => {
  test("Test 1: tiene que devolver un string", () => {
    expect(typeof decode("hola (odnum)")).toEqual("string");
  });

  test("Test 2: tiene que devolver 'hola mundo!'", () => {
    expect(decode("(olleh) (dlrow)!")).toEqual("hola mundo!");
  });

  test("Test 3: tiene que devolver 'santaclaus'", () => {
    expect(decode("sa(u(cla)atn)s")).toEqual("santaclaus");
  });

  test("Test 4: tiene que devolver 'santa'", () => {
    expect(decode("((nta)(sa))")).toEqual("santa");
  });
});
