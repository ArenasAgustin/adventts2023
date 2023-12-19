import autonomousDrive from "./15";
import { expect, test } from "@jest/globals";

describe("15", () => {
  test("Test 1: tiene que devolver un array", () => {
    expect(
      Array.isArray(
        autonomousDrive(["..!....", "...*.*."], ["R", "R", "D", "L"])
      )
    ).toEqual(true);
  });

  test("Test 2: tiene que devolver ['.......', '...*!*.']", () => {
    expect(
      autonomousDrive(["..!....", "...*.*."], ["R", "R", "D", "L"])
    ).toEqual([".......", "...*!*."]);
  });

  test("Test 3: tiene que devolver ['.......', '..!...*']", () => {
    expect(autonomousDrive(["..!....", "......*"], ["R", "D", "L"])).toEqual([
      ".......",
      "..!...*",
    ]);
  });

  test("Test 4: tiene que devolver ['.**.*.*.', '.***....', '.....!..']", () => {
    expect(
      autonomousDrive(
        [".**.*.*.", ".***....", "..!....."],
        ["D", "U", "R", "R", "R"]
      )
    ).toEqual([".**.*.*.", ".***....", ".....!.."]);
  });

  test("Test 5: tiene que devolver ['*.....*', '*....!*']", () => {
    expect(
      autonomousDrive(["*..!..*", "*.....*"], ["R", "R", "D", "D"])
    ).toEqual(["*.....*", "*....!*"]);
  });
});
