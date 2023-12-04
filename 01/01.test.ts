import findFirstRepeated from "./01";
import { expect, test } from "@jest/globals";

const gifts = [2, 1, 3, 5, 3, 2];
const gifts2 = [10, 20, 30];

describe("01", () => {
  test("Test 1: tiene que devolver un número", () => {
    expect(typeof findFirstRepeated(gifts)).toEqual("number");
  });

  test("Test 2: tiene que devolver el primer número repetido", () => {
    expect(findFirstRepeated(gifts)).toEqual(3);
  });

  test("Test 3: tiene que devolver -1 en caso de no encontrar números repetidos", () => {
    expect(findFirstRepeated(gifts2)).toEqual(-1);
  });
});
