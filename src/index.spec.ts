// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { evalrpn } from "./index";

expect.extend(matchers);

it("test addition :", function () {
  expect(evalrpn("2 2 +")).toEqual(4);
});

it("test suppression :", function () {
  expect(evalrpn("2 1 -")).toEqual(1);
});

it("test multiplication :", function () {
  expect(evalrpn("2 2 *")).toEqual(4);
});

it("test division :", function () {
  expect(evalrpn("10 2 /")).toEqual(5);
});

it("test negate :", function () {
  expect(evalrpn("2 NEGATE 6 +")).toEqual(4);
});

it("test negate failed :", function () {
  expect(evalrpn("-2 6 +")).toEqual("test failed");
});
/////////// new test

it("addition sup:", function () {
  expect(evalrpn("99 11 + 8 7 + +")).toEqual(125);
});

it("multiplication sup:", function () {
  expect(evalrpn("4 7 * 5 2 * *")).toEqual(280);
});

it("suppression sup:", function () {
  expect(evalrpn("33 3 - 10 6 - -")).toEqual(26);
});

it("division sup:", function () {
  expect(evalrpn("90 3 / 30 5 / /")).toEqual(5);
});

it("all calcul:", function () {
  expect(evalrpn("15 7 1 1 + - / 3 * 2 1 1 + + -")).toEqual(5);
});

it("big calcul:", function () {
  expect(evalrpn("2")).toEqual(2);
  expect(evalrpn("3 4 +")).toEqual(7);
  expect(evalrpn("12 4 / 1 -")).toEqual(2);
  expect(evalrpn("12 4 1 - /")).toEqual(4);
  expect(evalrpn("15 7 1 1 + - / 3 * 2 1 1 + + -")).toEqual(5);
});

// it("jest-extended is included", function () {
//   expect([1, 0]).toIncludeSameMembers([0, 1]);
// });
