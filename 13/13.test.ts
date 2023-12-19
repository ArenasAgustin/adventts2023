import calculateTime from "./13";
import { expect, test } from "@jest/globals";

describe("13", () => {
  test("Test 1: tiene que devolver string", () => {
    expect(typeof calculateTime(["00:10:00", "01:00:00", "03:30:00"])).toEqual(
      "string"
    );
  });

  test("Test 2: tiene que devolver '-02:20:00'", () => {
    expect(calculateTime(["00:10:00", "01:00:00", "03:30:00"])).toEqual(
      "-02:20:00"
    );
  });

  test("Test 3: tiene que devolver '00:30:00'", () => {
    expect(calculateTime(["02:00:00", "05:00:00", "00:30:00"])).toEqual(
      "00:30:00"
    );
  });

  test("Test 4: tiene que devolver '05:02:01'", () => {
    expect(calculateTime(["01:01:01", "09:59:59", "01:01:01"])).toEqual(
      "05:02:01"
    );
  });

  test("Test 5: tiene que devolver '-00:00:01'", () => {
    expect(
      calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"])
    ).toEqual("-00:00:01");
  });
});
