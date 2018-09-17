describe("Testing date functions work as expected", function() {
  date_helpers = require('../../src/utils/date_helpers.js');

// module.exports = {
//   DaysEnum : DaysEnum,
//   getCurrentDate : getCurrentDate,
//   getCurrentWeekDays : getCurrentWeekDays
// }
  beforeEach(function() {
    // player = new Player();
    // song = new Song();

  });

  it("Should return current date of the week", function() {
    let res = date_helpers.getCurrentDate();
    expect(res).toEqual(1);
  });

  
  it("Should return the rest dates of the week start from Monday", function() {
    const today = 1;
    let res = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, today);
    expect(res).toEqual([1,2,3,4,5,6,0]);
  });

  it("Should return the rest dates of the week start from Thursday", function() {
    const today = 4;
    let res = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, today);
    expect(res).toEqual([4,5,6,0,1,2,3]);
  });



});
