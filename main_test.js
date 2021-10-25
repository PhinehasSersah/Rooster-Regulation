const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDown', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const actual =  Rooster.announceDawn();

      //Verify
      assert.equal(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

//setup
const inputParameter = 16;
const expected = '16';

//Exercise
const actual = Rooster.timeAtDawn(inputParameter);
//Verify
assert.strictEqual(actual, expected);

    });
 it('throws an error if passed a number less than 0',() => {
   //Setup
   const time = -1;
   const expected = RangeError;
   //Verify
   assert.throws(() => {
     Rooster.timeAtDawn(time)
   }, expected);
 });
 it('throws an error if passed a number greater than 23', () => {
    //Setup
   const time = 25;
   const expected = RangeError;
   //Verify
   assert.throws(() => {
     Rooster.timeAtDawn(time)
   }, expected);
 })

  });
})