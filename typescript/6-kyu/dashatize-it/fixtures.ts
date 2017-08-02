/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import { dashatize } from './solution';
import { assert } from 'chai';

const Test = {
  expect: (...args) => (assert as any)(...args),
  assertEquals: (...args) => (assert as any).equal(...args),
};

describe("Basic", function(){
it('Basic', () => {
  Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
  Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
  Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
  Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
});
});
describe("Weird", function(){
it('Weird', () => {
  Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
  Test.assertEquals(dashatize(0), "0", "Should return 0");
  Test.assertEquals(dashatize(-1), "1", "Should return 1");
  Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
});
});