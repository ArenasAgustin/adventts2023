import cyberReindeer from "./05";
import { expect, test } from "@jest/globals";

describe("05", () => {
  test("Test 1: tiene que devolver un array", () => {
    expect(Array.isArray(cyberReindeer("S..|...|..", 10))).toEqual(true);
  });

  test("Test 2: tiene que devolver 'hola mundo!'", () => {
    expect(cyberReindeer("S..|...|..", 10)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S..",
    ]);
  });

  test("Test 3: tiene que devolver 'santa'", () => {
    expect(cyberReindeer("S.|.|.|......|.||.........", 8)).toEqual([
      "S.|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      "..S.*.*......*.**.........",
      "..*S*.*......*.**.........",
      "..*.S.*......*.**.........",
    ]);
  });
});
