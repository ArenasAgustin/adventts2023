import findFirstRepeated from "./01";
import { expect, test } from "@jest/globals";

const gifts = [2, 1, 3, 5, 3, 2];
const gifts2 = [10, 20, 30];

test("Test 1 Día 01", () => {
  expect(typeof findFirstRepeated(gifts)).toBe("number");
});

test("Test 2 Día 01", () => {
  expect(findFirstRepeated(gifts)).toBe(3);
});

test("Test 3 Día 01", () => {
  expect(findFirstRepeated(gifts2)).toBe(-1);
});
