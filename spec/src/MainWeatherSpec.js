describe("Testing MainWeather API call returns a URL as expected", function() {
  date_helpers = require('../../src/utils/date_helpers.js');
  MainWeather = require('../../src/components/MainWeather/MainWeather.js');
  
  // import MainWeather from '../../src/components/MainWeather/MainWeather';

// module.exports = {
//   DaysEnum : DaysEnum,
//   getCurrentDate : getCurrentDate,
//   getCurrentWeekDays : getCurrentWeekDays
// }
  // beforeEach(function() {
  //   // player = new Player();
  //   // song = new Song();

  // });

  it("Should return correctly formatted URL for metric API URL", function() {
    let expectedRes = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=26b3fd73e61dc700f749547b3833c188";
    let actualRes = MainWeather.generateURL("http://api.openweathermap.org/data/2.5/weather?", 
        "metric", 
        "26b3fd73e61dc700f749547b3833c188"
    );
    expect(actualRes).toEqual(expectedRes);
  });

  
  // it("Should return the rest dates of the week start from Monday", function() {
  //   const today = 1;
  //   let res = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, today);
  //   expect(res).toEqual([1,2,3,4,5,6,0]);
  // });

  // it("Should return the rest dates of the week start from Thursday", function() {
  //   const today = 4;
  //   let res = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, today);
  //   expect(res).toEqual([4,5,6,0,1,2,3]);
  // });



});
