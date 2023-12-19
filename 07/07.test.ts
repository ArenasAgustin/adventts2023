import drawGift from "./07";
import { expect, test } from "@jest/globals";

describe("07", () => {
  test("Test 1: tiene que devolver un string", () => {
    expect(typeof drawGift(4, "+")).toEqual("string");
  });

  test("Test 2: tiene que devolver un regalo de tamaño 4", () => {
    expect(drawGift(4, "+")).toEqual(
      "   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n"
    );
  });

  test("Test 3: tiene que devolver un regalo de tamaño 5", () => {
    expect(drawGift(5, "*")).toEqual(
      "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n"
    );
  });

  test("Test 4: tiene que devolver un regalo de tamaño 1", () => {
    expect(drawGift(1, "^")).toEqual("#\n");
  });

  test("Test 5: tiene que devolver un regalo de tamaño 2", () => {
    expect(drawGift(2, "&")).toEqual(" ##\n###\n##\n");
  });
});
